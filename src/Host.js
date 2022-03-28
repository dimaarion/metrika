import React, { useEffect } from "react";

import "./css/metrika.css";
import "./css/host.css";
import { procent } from "./action";
export default function Host(props) {
  let h = 500;
  const styles = {
    hostBlock: {
      height: h
    },
    hostYNum: { position: "absolute", marginTop: "-25px", left: 0, right: 0 }
  };
  return (
    <div className="col-sm" style={styles.hostBlock}>
      <div className="row">
        {props.hostY.map((x) => (
          <div
            className="col-sm hostY"
            style={{
              height: procent(h, x.host) + "px",
              marginTop: h - procent(h, x.host) + "px"
            }}
          >
            <div className="text-center" style={styles.hostYNum}>
              {x.host}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
