import DrawerParent from "../../Drawer/DrawerParent";
import styles from "./allMD.module.css";
import Footer from "../Footer/Footer";

export const AllMarketDominant = (props) => {
  return (
    <>
      <DrawerParent />
      <div className={styles.allMDContainer}>
        <div className={styles.titleContainer}>
          <p>All Market Dominant Products</p>
        </div>
      </div>
      <div className={styles.barGraphAndLineContainer}>
        <div className={styles.barGraphContainer}>
          {/* <CountBarGraph propData={joinedDataAnnual} /> */}
        </div>
        <div className={styles.lineGraphContainer}>
          <div className={styles.lineGraphTitle}>
            <div>Service Performance Scores</div>
            <div>First Class Single-Piece Letters and Cards</div>
          </div>
          {/* 
          <LineGraphDoubleSeries
            keeperProds={keeperProds}
            joinedDataQtr={joinedDataQtr}
          /> */}
        </div>
      </div>
      <div className={styles.yearDropdownContainer}>
        <div className={styles.emptyDiv_yearDropdown}></div>
        {/* <YearDropdown
          propData={annualData}
          selectedYear={selectedYear}
          changeYearSelected={changeYearSelected}
        /> */}
      </div>
      <div className={styles.lowerHalfEmptyDiv}></div>

      <div className={`${styles.lowerHalf}`}>
        <div className={styles.tableContainer}>
          {/* <ProductCountTableMD
          countData={countDataTopLevel}
          selectedYear={selectedYear}
        /> */}
        </div>
        <div className={styles.pieGraphAndDownloadBtn}>
          <div className={styles.pieGraphContainer}>
            {/* <PieGraph
            countData={countDataTopLevel}
            selectedYear={selectedYear}
          /> */}
          </div>
          <div className={styles.downloadBtnContainer}>
            {/* <DownloadButton
            propData={joinedDataForDownload}
            dataName={"Market Dominant Data"}
            dataType="libRef"  */}
          </div>
        </div>
      </div>
      <div className={styles.footerSpacer}></div>
      <Footer />
    </>
  );
};

export default AllMarketDominant;
