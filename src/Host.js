import React, { useEffect, useState } from "react";

import "./css/metrika.css";
import "./css/host.css";
import { procent } from "./action";
export default function Host(props) {
  let h = 300;
  const styles = {
    hostBlock: {},
    hostYNum: { position: "absolute", marginTop: "-25px", left: 0, right: 0 }
  };
  const [buttonActive, SetButtonActive] = useState("Y");
  function hostGrafick(arr) {
    if (arr !== undefined) {
      return arr.map((x) => (
        <div key={x.name + x.id} className="col-sm p-1">
          <div
            className="hostY"
            style={{
              height: procent(h, x.host) + "px",
              marginTop: h - procent(h, x.host) + "px"
            }}
          >
            <div className="text-center" style={styles.hostYNum}>
              {x.host}
            </div>
          </div>
          <div className="text-center">{x.name}</div>
        </div>
      ));
    } else {
      return <div>err</div>;
    }
  }
  return (
    <div className="col-sm" style={styles.hostBlock}>
      <div className="col-sm buttonHost mt-1">
        <div className="row">
          <div className="pr-1">
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => SetButtonActive("M")}
            >
              Месяц
            </button>
          </div>
          <div className="pr-1">
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => SetButtonActive("Y")}
            >
              Год
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {buttonActive === "Y" ? hostGrafick(props.hostY) : ""}
        {buttonActive === "M" ? hostGrafick(props.mount) : ""}
      </div>
      <div className="hostGrafikName"></div>
    </div>
  );
}
