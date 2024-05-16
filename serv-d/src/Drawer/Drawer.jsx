import React, { useState } from "react";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import styles from "./Drawer.module.css";
// import DehazeIcon from "@mui/icons-material/Dehaze";

import { NavLink } from "react-router-dom";

// export const Drawer02 = (props) => {
const DrawerParent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function changeDrawer(binaryInput) {
    setIsOpen(binaryInput);
  }

  const mailClassNames = [
    {
      text: "First-Class Mail",
      path: "/first-class",
    },
    {
      text: "All Market Dominant",
      path: "/all-md",
    },
  ];

  function listFunc(inputArray) {
    const listItems = inputArray.map((el, idx) => {
      const { text, path } = el;
      return (
        <NavLink to={path} key={`navLink${text}`}>
          <ListItem
            key={text}
            onClick={() => {
              changeDrawer(false);
            }}
            className={styles.listItem}
          >
            <ListItemText primary={text} />
          </ListItem>
        </NavLink>
      );
    });
    return <List>{listItems}</List>;
  }

  const classNav = listFunc(mailClassNames);

  const openBtnFunc = (isOpen) => {
    if (!isOpen) {
      return (
        <div className={styles.btnContainer} onClick={() => changeDrawer(true)}>
          <div className={styles.iconLine}></div>
          <div className={styles.iconLine}></div>
          <div className={styles.iconLine}></div>
        </div>
      );
    }
    return <></>;
  };

  const openBtn = openBtnFunc(isOpen);

  return (
    <div className={styles.drawerContainer}>
      <div className={styles.leftDiv}> {openBtn}</div>
      <div className={styles.content}>
        <Drawer anchor="left" open={isOpen} onClose={() => changeDrawer(false)}>
          <Box sx={{ width: "10rem" }}>{classNav}</Box>
        </Drawer>
      </div>
    </div>
  );
};

// export default withRouter(Drawer02);
export default DrawerParent;

{
  /* <div className={styles.leftDiv}> {openBtn}</div>
<div className={styles.content}>
  <Drawer anchor="left" open={isOpen} onClose={() => changeDrawer(false)}>
    <Box sx={{ width: "10rem" }}>
      {homeNav}

    </Box>
  </Drawer>
</div> */
}
