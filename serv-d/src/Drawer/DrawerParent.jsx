import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import styles from "./Drawer.module.css";

import { NavLink } from "react-router-dom";

const DrawerParent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function changeDrawer(binaryInput) {
    setIsOpen(binaryInput);
  }

  const mailClassLinks = [
    {
      text: "First-Class Mail",
      path: "/first-class",
    },
    {
      text: "USPS Marketing Mail",
      path: "/marketing-mail",
    },
    {
      text: "Periodicals",
      path: "/periodicals",
    },
    {
      text: "Package Services",
      path: "/package-services",
    },
    {
      text: "Special Services",
      path: "/special-services",
    },
  ];

  const homeLinks = [
    {
      text: "Home",
      path: "/",
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

  const classNav = listFunc(mailClassLinks);
  const homeNav = listFunc(homeLinks);

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
          <Box sx={{ width: "13rem" }}>{homeNav}</Box>
          <Divider />
          <Box sx={{ width: "13rem" }}>{classNav}</Box>
        </Drawer>
      </div>
    </div>
  );
};

export default DrawerParent;
