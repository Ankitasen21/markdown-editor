import React from "react";
import logo from "../contents/logo.svg";
import styles from "../UI/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="BrandLogo" className={styles.logo}></img>
      <ul className={styles.nav_menu}>
        <li className={styles.nav_item}>
          <a href="login.js" className={styles.link}>
            Login
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
