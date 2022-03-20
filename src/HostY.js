import React, { useEffect } from "react";
import "./css/bootstrap.css";
import Sketch from "react-p5";
export default function HostY(props) {
  function resizes() {
    let hostY = document.querySelector(".hostY");
    return hostY.clientWidth;
  }
  useEffect(() => {}, []);
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(resizes(), 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255, 0, 255);
    p5.ellipse(p5.width / 2, p5.height / 2, 10, 10);
  };

  return (
    <div className="hostY">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
