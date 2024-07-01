import { useEffect, useState } from "react";
import ClassGraphSingleYear from "../../DashComponents/ClassGraphSingleYear/ClassLevelGraph";
import ProductCountTable from "../../DashComponents/UIBits/productCountTable/ProductCountTable";
import ProductDropdown from "../../DashComponents/UIBits/ProductDropdown/ProductDropdown";
import YearDropdown from "../../DashComponents/UIBits/YearDropdown";
import DownloadButton from "../../DashComponents/UIBits/DownloadButton/DownloadButton";
import Footer from "../Footer/Footer";

import MailClassDef from "../../DashComponents/UIBits/MailClassDef";

import { joinDataWithProdKey } from "../../DataManipulation/join";
import { filterAnnualComparison } from "../../DataManipulation/filterAnnualComparison";
import ProductPage from "../ProductPage/ProductPage";
import annualData from "../../Data/annual - Updated.json";
import quarterData from "../../Data/quarterly - Updated.json";
import fcWeeklyData from "../../Data/FC_weekly.json";
import styles from "./MailClassPageStyles.module.css";
import LineGraphFCWeekly from "../../DashComponents/LineGraphFCWeekly/LineGraphFCWeekly";
import DrawerParent from "../../Drawer/DrawerParent";

export const MailClassPage = (props) => {
  const { mailClassName } = props;
  const [selectedProductId, setSelectedProductId] = useState(0);
  const [selectedYear, setSelectedYear] = useState(2023);
  const [joinedDataAnnual, setJoinedDataAnnual] = useState(
    joinDataWithProdKey(annualData)
  );
  const [joinedDataQtr, setJoinedDataQtr] = useState(
    joinDataWithProdKey(quarterData)
  );

  useEffect(() => {
    // setSelectedProductId(0);
    setSelectedProductId(defaultId(mailClassName));
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // setSelectedProductId(0);
    setSelectedProductId(defaultId(mailClassName));
    window.scrollTo(0, 0);
  }, [mailClassName]);

  function defaultId(mailClass) {
    const mailClassMap = {
      "First Class Mail": 99,
      "Marketing Mail": 8,
      Periodicals: 15,
      "Special Services": 103,
      "Package Services": 89,
    };

    return mailClassMap[mailClass];
  }

  function changeProductSelected(e) {
    const rawValue = e.target.value;
    let matchingProductId = parseInt(rawValue.match(/\d+/)[0]);
    setSelectedProductId(matchingProductId);
  }

  function changeYearSelected(e) {
    setSelectedYear(e.target.value);
  }

  const isFirstClass = mailClassName === "First Class Mail" ? true : false;

  function mailClassNameTitle(mailClassName) {
    const trailingText = " Class-Level Data";
    if (isFirstClass) {
      return "First-Class Mail" + trailingText;
    } else {
      return mailClassName + trailingText;
    }
  }

  const mailClassTitleText = mailClassNameTitle(mailClassName);

  const filteredAnnualData = filterAnnualComparison(
    mailClassName,
    selectedYear,
    joinedDataAnnual
  );

  const countTableClassName = isFirstClass
    ? styles.outerContainerProductCountFC
    : styles.outerContainerProductCount;

  return (
    <>
      <DrawerParent />
      <div className={styles.allMdContainer} id="allMdContainer">
        <div className={styles.topHalf}>
          <div className={styles.container_titleGraphYear}>
            {isFirstClass ? (
              <>
                <div className={styles.isFirstClass}></div>
                <div className={styles.pageTitleContainer}>
                  <p>{mailClassNameTitle(mailClassName)}</p>
                </div>

                <div className={styles.fcWeeklyContainer}>
                  <LineGraphFCWeekly data={fcWeeklyData} />
                  <div className={styles.downloadBtnContainerWeekly}>
                    <DownloadButton
                      propData={fcWeeklyData}
                      dataName="First-Class Weekly Data"
                      dataType={"FCWeekly"}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.notFirstClass}> </div>
                <div className={styles.pageTitleContainer}>
                  <p>{mailClassNameTitle(mailClassName)}</p>
                </div>
              </>
            )}
          </div>
          <div className={styles.yearDropdownOuterContainer}>
            <YearDropdown
              propData={annualData}
              selectedYear={selectedYear}
              changeYearSelected={changeYearSelected}
            />
          </div>
          <div className={styles.graphAndCountTableContainer}>
            <div className={styles.classGraphOuterContainer}>
              <ClassGraphSingleYear
                propData={filteredAnnualData}
                mailClass={mailClassName}
                selectedYear={selectedYear}
              />
            </div>
            <div className={countTableClassName}>
              <ProductCountTable
                propData={joinedDataAnnual}
                selectedYear={selectedYear}
                mailClassName={mailClassName}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mailClassDefContainer}>
        <MailClassDef mailClass={mailClassName} />
      </div>
      <div className={styles.productPageContainer}>
        <ProductDropdown
          propDataAnnual={joinedDataAnnual}
          propDataQuarterly={joinedDataQtr}
          selectedProductId={selectedProductId}
          changeProductSelected={changeProductSelected}
          mailClass={mailClassName}
        />

        <ProductPage
          selectedProductId={selectedProductId}
          joinedDataAnnual={joinedDataAnnual}
          joinedDataQtr={joinedDataQtr}
        />
      </div>

      <Footer />
    </>
  );
};

export default MailClassPage;
