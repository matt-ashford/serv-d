import DrawerParent from "../../Drawer/DrawerParent";
import HomePageGlossary from "./HomePageGlossary";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import sty from "./HomePage.module.css";
import Logo from "../../Design/prcIcon.svg";
import Footer from "../Footer/Footer";
import fcWeeklyData from "../../Data/FC_weekly.json";
import LineGraphFCWeekly from "../../DashComponents/LineGraphFCWeekly/LineGraphFCWeekly";

import DashContents from "./HomePageContents";

import { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const acdLinksArray = [
    {
      address:
        "https://prc.arkcase.com/portal/docket-search/advanced/filing-details/128338",
      fy: 2023,
    },
    {
      address:
        "https://prc.arkcase.com/portal/docket-search/advanced/filing-details/84025",
      fy: 2022,
    },
    {
      address:
        "https://prc.arkcase.com/portal/docket-search/advanced/filing-details/51451",
      fy: 2021,
    },
    {
      address:
        "https://prc.arkcase.com/portal/docket-search/advanced/filing-details/37721",
      fy: 2020,
    },
    {
      address:
        "https://prc.arkcase.com/portal/docket-search/advanced/filing-details/65056",
      fy: 2019,
    },
  ];

  const acdLinksHtml = acdLinksArray.map((row, idx) => {
    return (
      <div key={`div_${idx}`}>
        <br key={`br_${idx}`} />
        <Link
          key={`link_${idx}`}
          href={`${row.address}`}
          className="homePageLink"
        >
          Annual Compliance Determination FY{row.fy}
        </Link>
        <br key={`secondBr_${idx}`} />
        <br key={`secondBr_${idx}b`} />

        {idx === acdLinksArray.length - 1 ? (
          <></>
        ) : (
          <Divider key={`divider_${idx}`} />
          // <></>
        )}
      </div>
    );
  });

  return (
    <>
      <DrawerParent />
      <div className={sty.homePageFull}>
        <div className={sty.titleAndLogoContainer}>
          <div className={sty.homePageTextContainerLeft}>
            <p className={sty.homePageWelcome}>Welcome</p>
            <p className={sty.subTitle}>
              Postal Regulatory Commission Service Performance Dashboard
            </p>
            <div id="topLogoContainer">
              <img src={Logo} alt="Your SVG" />
            </div>
          </div>
        </div>

        <div className={sty.introTextContainer}>
          <p className={sty.dashIntroPara}>
            The Postal Regulatory Commission has launched an interactive
            dashboard that provides visual data and interactive tools to allow
            the public to view the service performance results for many Market
            Dominant mail products (and product components) delivered by the
            United States Postal Service (USPS).
          </p>
          <p className={sty.dashIntroPara}>
            The Commission has published the &nbsp;
            <a
              rel="noreferrer"
              target="_blank"
              href="https://prc.arkcase.com/portal/docket-search/advanced/filing-details/128338"
            >
              <u>Annual Compliance Determination</u>
            </a>
            &nbsp;for fiscal year 2023.
          </p>
          <p className={sty.dashIntroPara}>
            Since the Commission published the beta dashboard and received
            comments on it, Congress passed the Postal Service Reform Act of
            2022, and the President signed the reform bill into law on April 6,
            2022. <i>See&nbsp;</i>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.congress.gov/117/plaws/publ108/PLAW-117publ108.pdf"
            >
              <u>
                Postal Service Reform Act, Pub. L. 117-108, 136 Stat. 1127
                (April 6, 2022
              </u>
              )
            </a>
            . The reform law requires the Postal Service to develop its own
            public, interactive, service performance dashboard that, among other
            features, presents data in a manner that is searchable and can be
            downloaded in bulk by any person or entity, which is available at at
            https://about.usps.com/what/performance/service-performance/external-service-measurement.htm.
            The law tasks the Commission with:
          </p>
          <ul className={sty.dashIntroPara}>
            <li>
              establishing requirements for publication of service performance
              information on the Postal Service's dashboard (in terms of
              organizational structure, geographic coverage, granularity, and
              temporal coverage);
            </li>
            <li>
              recommending any changes to the Postal Service's measurement
              systems that the Commission deems necessary for measurement and
              publication of service performance information on the dashboard;
              and
            </li>
            <li>
              regularly consulting with the Postal Service on appropriate
              features and information for the Postal Service's dashboard.
            </li>
          </ul>
          The Commission published the dashboard requirements and recommended
          changes to the Postal Service's measurement systems on February 9,
          2023 in Order No. 6439.
        </div>
        <div className={sty.introTextContainer}>
          <Grid>
            <p className={sty.homePageHeader}>About this Dashboard</p>
            <br />
            <p className={sty.dashIntroPara}>
              The Postal Service sets service standards for products and product
              components, which identify the amount of time within which a
              customer can ordinarily expect a mailpiece to be delivered
              (expected days-to-delivery). The Postal Service also sets service
              performance targets for products and product components, which
              impose a goal for the percentage of measured mailpieces that
              should be delivered within their applicable service standard
              (on-time percent target). This dashboard provides a visual
              comparison of the actual percentage of measured Market Dominant
              mailpieces delivered on-time, which means within their applicable
              service standard (the service performance score), with the service
              performance targets established by USPS.
            </p>
            <p className={sty.dashIntroPara}>
              The public data contained in the dashboard are obtained from the
              Commission’s Annual Compliance Review dockets and will change
              throughout time as data are updated.
            </p>
            <p className={sty.dashIntroPara}>
              The Commission’s dashboard is interactive, allowing users to
              explore and reveal service performance information by hovering
              over data points. When hovering over an element of visual data, a
              pop-up will provide additional information.{" "}
            </p>

            <br />
            <br />
            <div className={sty.homePageGraphContainer}>
              <LineGraphFCWeekly data={fcWeeklyData} />
            </div>

            <br />
            <br />
            <p className={sty.homePageHeader}>Dashboard Contents</p>

            <DashContents />
          </Grid>
        </div>
        <div className={sty.additionalResourcesLinkes}>
          <div id="linksContainer">
            <p className={sty.homePageHeader}>Additional Resources</p>
            <br />
            <div className={sty.homePageACDLink}>{acdLinksHtml}</div>
          </div>
        </div>

        <div className={sty.glossaryContainer}>
          <HomePageGlossary />
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default HomePage;
