import React, { useEffect, useState } from "react";
import "./css/bootstrap.css";
import Sketch from "react-p5";
import { collidePointRect } from "./action";
let r;
let interval = 0;
export default function HostY(props) {
  const [res, setRes] = useState(1000);
  function procent(h, p) {
    return (p / h) * 100;
  }
  let colors = ["#DFFF00", "#FFBF00", "#FF7F50", "#DE3163"];
  function yars(p5, interval) {
    p5.push();
    props.hostY.map((x) => {
      if (x.host < 20) {
        p5.fill(colors[3]);
      }
      if (x.host > 19 || x.host < 30) {
        p5.fill(colors[2]);
      }
      if (x.host > 29 || x.host < 40) {
        p5.fill(colors[1]);
      }
      if (x.host > 40) {
        p5.fill(colors[0]);
      }

      p5.rect(
        x.id * interval - interval,
        p5.height - procent(500, x.host),
        interval - 10,
        procent(500, x.host)
      );
      p5.textSize(20);
      p5.fill("#6495ED");
      p5.text(
        x.host,
        x.id * interval - interval / 2 - 20,
        p5.height - procent(500, x.host) - 5
      );
    });
    p5.pop();
  }

  function buttons(p5) {}
  useEffect(() => {}, []);
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component
    r = p5.select(".hostY").width;
    p5.createCanvas(r - 20, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    interval = r / 12;
    p5.background(255);
    yars(p5, interval);
    buttons(p5);
  };

  return (
    <div className="hostY">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
