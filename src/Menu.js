import React from "react";
import "./css/bootstrap.css";

export default function Menu(props) {
  return (
    <div className="menu">
      {props.menu.map((x) => (
        <div key={x.id + x.alias}>{x.name}</div>
      ))}
    </div>
  );
}
