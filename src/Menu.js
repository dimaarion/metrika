import React, { useState } from "react";
import "./css/bootstrap.css";
import "./css/menu.css";
export default function Menu(props) {
  const [active, setActive] = useState("Главная");
  return (
    <div className="menu col-1 mt-5 boxes">
      {props.menu.map((x, i) => (
        <div
          className={active === x.name ? "active" : "list"}
          key={x.id + x.alias}
          data_x={i}
          onClick={(e) => {
            props.setPage(e.target.textContent);
            setActive(e.target.textContent);
          }}
        >
          {x.name}
        </div>
      ))}
    </div>
  );
}
