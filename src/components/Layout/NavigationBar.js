import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/NavigationBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMusic } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.linksWrapper}>
        <NavLink
          to="/"
          exact
          className={styles.links}
          style={({ isActive }) => {
            return {
              color: isActive ? "#b92a25" : "black",
            };
          }}
        >
          <FontAwesomeIcon icon={faMusic} />
          Discover
        </NavLink>
        <NavLink
          to="/favorite"
          className={styles.links}
          style={({ isActive }) => {
            return {
              color: isActive ? "#b92a25" : "black",
            };
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
          Favorite
        </NavLink>
      </div>
    </nav>
  );
};

export default NavigationBar;
