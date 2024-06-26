import { NavLink } from "react-router-dom";
import sty from "./HomePage.module.css";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Box,
} from "@mui/material";
// import { Link } from "react-router-dom";

const DashContents = (props) => {
  const { history } = props;

  const mailClassNames = [
    {
      text: "All Market Dominant",
      path: "/service-performance/all-md",
    },
    {
      text: "First-Class Mail",
      path: "/service-performance/first-class",
    },
    {
      text: "USPS Marketing Mail",
      path: "/service-performance/marketing-mail",
    },
    {
      text: "Periodicals",
      path: "/service-performance/periodicals",
    },
    {
      text: "Package Services",
      path: "/service-performance/package-services",
    },
    {
      text: "Special Services",
      path: "/service-performance/special-services",
    },
  ];

  const links = mailClassNames.map((item, index) => {
    const { text, path } = item;
    const leadingText = `USPS service performance results for`;
    let trailingText = "";

    if ((text === "First-Class Mail") | (text === "All Market Dominant")) {
      trailingText = "product components";
    }
    const fullText = `${leadingText} ${text} ${trailingText}`;

    // const handleLinkClick = (e, path) => {
    //   e.preventDefault();
    //   // window.location.href = path;
    // };

    return (
      <div key={`div_${index}`} className={sty.homePageContentsContainer}>
        {/* <a
          key={`link_${index}`}
          href={path}
          onClick={(e) => handleLinkClick(e, path)}
          style={{ color: "black", fontSize: "2rem", textDecoration: "none" }}
        > */}
        <NavLink
          key={`link_${index}`}
          to={path}
          style={{ color: "black", fontSize: "2rem" }}
        >
          <ListItem disablePadding key={`contents_${index}`}>
            <ListItemButton>
              <ListItemText
                primary={fullText}
                primaryTypographyProps={{ style: { fontSize: "1.1rem" } }}
              />
            </ListItemButton>
          </ListItem>
        </NavLink>
        {/* </a> */}
      </div>
    );
  });

  return (
    <Box>
      <List id="homePageContentsList">{links}</List>;
    </Box>
  );
};

export default DashContents;
