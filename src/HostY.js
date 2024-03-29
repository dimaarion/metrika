import React, { useEffect, useState } from "react";
import "./css/bootstrap.css";
import Sketch from "react-p5";
import "./css/host.css";
import { collidePointRect } from "./action";
let r;
let interval = 0;
let interval2 = 0;
let press = 0;
let press2 = 0;
let mx, my;
let b;
let sel;
export default function HostY(props) {
  const [res, setRes] = useState(1000);
  const [sel, setSel] = useState("");
  function procent(h, p) {
    return (p / h) * 100;
  }
  let colors = ["#DFFF00", "#FFBF00", "#FF7F50", "#DE3163"];

  function artHost(p5, lin) {
    p5.push();
    p5.fill(0);
    p5.rect(200, 200, 200, 200);
    lin.map((x, i) => {
      p5.text(x.name, 5, x.id * 5);
      p5.rect(200, i * 10, 100, 100);
    });
    p5.pop();
  }

  function yars(p5, interval, lin) {
    p5.push();
    lin.map((x) => {
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

  function buttons(p5, p = { press: 0, r: 0 }, x, y, w, h, xt, yt, text) {
    p5.push();
    p5.textSize(20);

    if (p.press === p.r) {
      if (collidePointRect(mx, my, x, y, w, h)) {
        p5.fill("#117a8b");
        p5.rect(x, y, w, h);
        p5.fill(255);
        p5.text(text, xt, yt);
        return true;
      } else {
        p5.fill(255);
        p5.rect(x, y, w, h);
        p5.fill(0);
        p5.text(text, xt, yt);
        return false;
      }
    } else {
      p5.fill(255);
      p5.rect(x, y, w, h);
      p5.fill(0);
      p5.text(text, xt, yt);
    }
    p5.pop();
  }

  useEffect(() => {}, []);
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component
    r = p5.select(".hostY").width;

    p5.createCanvas(r - 20, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    interval = r / 12;
    interval2 = r / 31;
    p5.background(255);

    if (sel === "art") {
      artHost(p5, props.hostPage);
    } else {
      if (buttons(p5, { press: press, r: 1 }, 5, 5, 55, 50, 15, 35, "Год")) {
        b = 1;
        console.log(sel);
      }
      if (
        buttons(p5, { press: press2, r: 3 }, 60, 5, 95, 50, 75, 35, "Месяц")
      ) {
        b = 2;
      }
      if (b === 1) {
        yars(p5, interval, props.hostY);
      } else if (b === 2) {
        yars(p5, interval2, props.mount);
      } else {
        yars(p5, interval, props.hostY);
      }
    }
  };

  const mousePressed = (p5) => {
    press = 1;
    press2 = 3;
    mx = p5.mouseX;
    my = p5.mouseY;
  };

  return (
    <div className="hostY">
      <div className="row col">
        <div className="col"></div>
        <div className="col-1">
          <select
            className="hostSelect form-control mt-1"
            onChange={(e) => setSel(e.target.value)}
          >
            <option value="site">Сайт</option>
            <option value="art">Страницы</option>
          </select>
        </div>
      </div>

      <Sketch setup={setup} mousePressed={mousePressed} draw={draw} />
    </div>
  );
}
