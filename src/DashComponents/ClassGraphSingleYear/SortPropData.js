export const sortPropData = (inputData) => {
  const mailClass = inputData[0].mail_class;

  const inputData_sortProp = inputData.map((row) => {
    const sortProp =
      row.product_abbrev === null ? row.product : row.product_abbrev;
    return { sortProp, ...row };
  });

  const firstClassOrder = {
    "SPLC 2 Day": 0,
    "SPLC 3-5 Day": 1,
    "Prst 2 Day": 2,
    "Prst 3-5 Day": 3,
    "Prst Overnight": 4,
    "Flats Overnight": 5,
    "Flats 2 Day": 6,
    "Flats 3-5 Day": 7,
    "Int'l Outbound": 8,
    "Int'l Inbound": 9,
  };

  const markMailOrder = {
    Letters: 0,
    Flats: 1,
    "Carrier Route": 2,
    HDSL: 3,
    HDSF: 4,
    "EDDM-Retail": 5,
    Parcels: 6,
  };

  const allClassOrders = {
    "First Class": firstClassOrder,
    "Marketing Mail": markMailOrder,
  };

  let inputDataWithOrder = inputData_sortProp;

  let sortedData = inputDataWithOrder;

  sortedData = sortByClass(mailClass, inputData_sortProp, allClassOrders);

  sortedData = applyRecentTargets(sortedData);

  let sortedData_removeSubFlats = sortedData.filter((row) => {
    if (
      row.product !== "Single-Piece Flats" &&
      row.product !== "Presort Flats"
    ) {
      return row;
    }
  });

  return sortedData_removeSubFlats;
};

function applyRecentTargets(inputData) {
  let latestYear = inputData.reduce((soFar, row) => {
    return Math.max(soFar, row.fy);
  }, 0);

  const targetMapped = inputData.map((row) => {
    if (row.fy === latestYear) {
      return row;
    }
    const matchingId = row.product_id;
    let mostRecentTargetRow = inputData.filter((filterRow) => {
      return filterRow.fy === latestYear && filterRow.product_id === matchingId;
    });
    mostRecentTargetRow = mostRecentTargetRow[0];
    row.target = mostRecentTargetRow.target;
    return row;
  });

  return targetMapped;
}

function sortByClass(className, inputData_sortProp, allClassOrders) {
  let sortedData = inputData_sortProp;

  if (!Object.keys(allClassOrders).some((key) => key === className)) {
    return sortedData;
  }

  const orderObj = allClassOrders[className];

  const inputDataWithOrder = inputData_sortProp.map((row) => {
    const orderNumber = orderObj[row.sortProp];
    return { orderNumber, ...row };
  });

  sortedData = inputDataWithOrder.sort((a, b) => {
    return a.orderNumber - b.orderNumber;
  });

  return sortedData;
}
