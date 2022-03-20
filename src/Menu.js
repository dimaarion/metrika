import React from "react";
import "./css/bootstrap.css";

export default function Menu(props) {
  return (
    <div className="menu col-1 mt-4 boxes">
      {props.menu.map((x) => (
        <div key={x.id + x.alias}>{x.name}</div>
      ))}
    </div>
  );
}
