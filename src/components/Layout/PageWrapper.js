import React from "react";
import styles from "../../styles/PageWrapper.module.scss";

const PageWrapper = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default PageWrapper;
