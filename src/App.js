/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { get, getLocal } from "./action";
import "./css/bootstrap.css";
import Host from "./Host";
import HostPage from "./HostPage";
function App() {
  let d = new Date();
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [count, setCount] = useState(0);
  const [db, setDb] = useState([{}]);
  const [host, setHost] = useState([{}]);
  const [hostPage, setHostPage] = useState([{}]);

  useEffect(() => {
    get(setDb, "/adminpanel/host/metrika.php");
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

  let metrika = Object.values(db);
  return (
    <Container className="metrika">
      <Col>
        {metrika
          .filter((f) => f.name === "nameSite")
          .map((m, i) =>
            m.content.map((x) => (
              <h1 key={x.id + "nameSite"} className="nameSite">
                {x.name}
              </h1>
            ))
          )}
      </Col>
      <Col className="pageRow hostPage">
        <Row>
          <Col>
            {" "}
            <h3>
              {d.getDate() +
                " " +
                mounth[d.getMonth()] +
                " " +
                d.getUTCFullYear() +
                " г."}
            </h3>
          </Col>
          <Col>
            {" "}
            <h3>{hour + " : " + min + " : " + sec + ""}</h3>
          </Col>
        </Row>
      </Col>

      {host.map((m, i) => (
        <Host key={m.id + "host"} host={m} />
      ))}
      {/*metrika
        .filter((f) => f.name === "hostPage")
        .map((m, i) => (
          <HostPage key={m.name} metrika={m.content} />
        ))*/}
    </Container>
  );
}

export default App;
