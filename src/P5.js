import React from "react";
import Sketch from "react-p5";
let count = 0;
let x = 50;
let y = 50;
export default function P5() {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    count += 2;
    if (count < 200) {
      x++;
    } else {
      count = 0;
      x = 10;
    }

    p5.background("#e4eff4");
    p5.fill("#e4eff4");
    p5.stroke(255, 0, 255);
    p5.ellipse(p5.width / 2, p5.height / 2, x, x);
  };

  return <Sketch setup={setup} draw={draw} />;
}
