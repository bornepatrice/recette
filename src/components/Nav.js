import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/receipe/search">Recherche</Link>
        </li>
        <li>
          <Link to="/receipe/new">Nouveau</Link>
        </li>
        <li className="logout">
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
