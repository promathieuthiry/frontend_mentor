import React from "react";
import { header_container, title, moon_logo } from "./header.module.css";
import moon from "../../images/icon-moon.svg";
import sun from "../../images/icon-sun.svg";

export default function Header({ theme, themeToggler }) {
  return (
    <div className={header_container}>
      <h1 className={title}>TODO</h1>
      <img
        src={theme === "light" ? moon : sun}
        alt={""}
        className={moon_logo}
        onClick={themeToggler}
      />
    </div>
  );
}
