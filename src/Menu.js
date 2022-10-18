import React, { useState, useEffect } from "react";
import "./css/bootstrap.css";
import "./css/menu.css";
export default function Menu(props) {
  const [active, setActive] = useState("Главная");

  useEffect(() => {
    window.onscroll = (e) => {
      //  console.log(e);
    };
  }, []);
  return (
    <div
      className="menu col-sm boxes"
      onScroll={(e) => {
        console.log(e);
      }}
    >
      <ul className="nav justify-content-center">
        {props.menu.map((x, i) => (
          <li
            className="list nav-item"
            key={x.id + x.alias}
            data_x={i}
            onClick={(e) => {
              props.setPage(e.target.textContent);
              setActive(e.target.textContent);
            }}
          >
            <span
              className={active === x.name ? "active nav-link" : "nav-link"}
            >
              {x.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
