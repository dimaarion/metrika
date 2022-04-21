/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { get, getLocal } from "./action";
import "./css/bootstrap.css";
import HostPage from "./HostPage";
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
  const [hostY, setHostY] = useState([{}]);
  const [mount, setMount] = useState([{}]);
  const [page, setPage] = useState("hom");
  const [hostPages, setHostPage] = useState([{}]);

  useEffect(() => {
    getLocal(setMenu, "bd/menu.json");
    getLocal(setHost, "host/host.json");
    getLocal(setHostPage, "host/hostPage.json");
    getLocal(setHostY, "host/hostY.json");
    getLocal(setMount, "host/month.json");
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
          hostPage={hostPages}
          mount={mount}
          hostY={hostY}
          mounth={mounth}
          d={d}
          sec={sec}
          min={min}
          hour={hour}
          host={host}
        />
      </div>
      <div className="container mt-3">
        <HostPage host={hostPages} />
      </div>
    </div>
  );
}

export default App;
