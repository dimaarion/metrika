import React, { useEffect, useState } from "react";
import "./css/bootstrap.css";
import Sketch from "react-p5";
let r;
let interval = 0;
export default function HostY(props) {
  const [res, setRes] = useState(1000);
  function procent(h, p) {
    return (h * p) / 100;
  }
  useEffect(() => {}, []);
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component
    r = p5.select(".hostY").width;
    console.log(r);
    p5.createCanvas(r - 20, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    interval = r / 12;
    p5.background(255, 0, 255);
    props.hostY.map((x) =>
      p5.rect(
        x.id * interval - interval / 2,
        p5.height - procent(500, x.host),
        interval - 10,
        procent(500, x.host)
      )
    );
    p5.text(interval + "text", 100, 100);
  };

  return (
    <div className="hostY">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
