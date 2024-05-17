import { countTableDataFilter } from "./countTableDataFilter";
import ProductCountBar from "./ProductCountBar";
// import styles from "./ProductCountTableStyles.module.css";

import styles from "../../../mailClassComponents/MailClassPage/MailClassPageStyles.module.css";
import { filterAnnualComparison } from "../../../DataManipulation/filterAnnualComparison";
import { useEffect, useState } from "react";

export const ProductCountTable = (props) => {
  const { propData, selectedYear, mailClassName } = props;

  const [cellData, setCellData] = useState(
    countTableDataFilter(propData, selectedYear)
  );

  useEffect(() => {
    const filtData = filterAnnualComparison(
      mailClassName,
      selectedYear,
      propData
    );
    setCellData(countTableDataFilter(filtData, selectedYear));
  }, [propData, selectedYear, mailClassName]);

  function productOrComponent(mc) {
    const isFirstClass = mc == "First Class Mail";

    if (isFirstClass) {
      return "Product Components";
    }
    return "Products";
  }

  return (
    <>
      <div className={styles.outerContainerProductCount}>
        <div className={styles.countCell} id={styles.totalCountCountainer}>
          <p className={styles.tableTextNumber}>{cellData.productCount}</p>
          <br />
          <p className={styles.tableText}>
            {productOrComponent(mailClassName)} are Rated in this Class
          </p>

          <ProductCountBar
            totalProductCount={cellData.productCount}
            thisCount={cellData.productCount}
            dataType="totalProductCount"
          />
        </div>

        <div className={styles.countCell} id={styles.missedCountCountainer}>
          <p className={styles.tableTextNumber}>{cellData.missedTarget}</p>
          <br></br>
          <p className={styles.tableText}>
            {productOrComponent(mailClassName)} Missed their Targets in{" "}
            {selectedYear}
          </p>

          <ProductCountBar
            totalProductCount={cellData.productCount}
            thisCount={cellData.missedTarget}
            dataType="missedProductCount"
          />
        </div>
        <div className={styles.countCell} id={styles.decCountContainer}>
          <p className={styles.tableTextNumber}>{cellData.decreasedCount}</p>
          <br></br>

          <p align="left" className={styles.tableText}>
            {productOrComponent(mailClassName)} Decreased in {selectedYear}
          </p>
          <ProductCountBar
            totalProductCount={cellData.productCount}
            thisCount={cellData.decreasedCount}
            dataType="decreasedProductCount"
          />
        </div>
      </div>
    </>
  );
};

export default ProductCountTable;
