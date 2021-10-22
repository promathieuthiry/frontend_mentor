import React from "react";
import {
  container,
  items_center,
  clear_items,
  item,
} from "./Footer.module.css";

function Footer({ data, caseFilter, setCaseFilter, clear }) {
  const itemLeft = data.filter((el) => !el.isDone);

  return (
    <div className={container}>
      <p>{itemLeft.length} items left</p>
      <div className={items_center}>
        <p
          className={item}
          onClick={() => setCaseFilter(0)}
          style={{ color: caseFilter === 0 && "#3A7CFD" }}
        >
          All
        </p>
        <p
          className={item}
          onClick={() => setCaseFilter(1)}
          style={{ color: caseFilter === 1 && "#3A7CFD" }}
        >
          Active
        </p>

        <p
          className={item}
          onClick={() => setCaseFilter(2)}
          style={{ color: caseFilter === 2 && "#3A7CFD" }}
        >
          Completed
        </p>
      </div>

      <p onClick={() => clear()} className={clear_items}>
        Clear completed
      </p>
    </div>
  );
}

export default Footer;
