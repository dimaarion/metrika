/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { get, getLocal } from "./action";
import "./css/bootstrap.css";
import Host from "./Host";
import Menu from "./Menu";
import Metrika from "./Metrika";
function App() {
  let d = new Date();
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [count, setCount] = useState(0);
  const [menu, setMenu] = useState([{}]);
  const [host, setHost] = useState([{}]);
  const [hostPage, setHostPage] = useState([{}]);

  useEffect(() => {
    getLocal(setMenu, "bd/menu.json");
    getLocal(setHost, "host/host.json");
    getLocal(setHostPage, "host/hostPage.json");
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (count > 10) {
      setCount(0);
    }
    setMin(d.getMinutes());
    setSec(d.getSeconds());
    setHour(d.getHours());
  }, [count]);

  let mounth = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря"
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <Menu menu={menu} />
        <Metrika
          mounth={mounth}
          d={d}
          sec={sec}
          min={min}
          hour={hour}
          host={host}
        />
      </div>
    </div>
  );
}

export default App;
