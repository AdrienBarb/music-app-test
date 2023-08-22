import React from "react";
import styles from "../../styles/Layout.module.scss";
import NavigationBar from "./NavigationBar";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div className={styles.container}>
      <NavigationBar />
      {children}
    </div>
  );
};

export default Layout;
