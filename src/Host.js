import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./css/metrika.css";
import P5 from "./P5";
export default function Host(props) {
  let styles = {
    load: {
      margin: "auto",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "500px",
      height: "500px"
    }
  };
  function content(props) {
    return (
      <Col>
        <Row>
          <Col sm className="text-center host-view view">
            <h4>Всего просмотров</h4>
            <h3>{props.host.count + ""}</h3>
          </Col>
          <Col sm className="text-center hostDay-view view">
            <h4>Просмотров этом году</h4>
            <h3>{props.host.hostDay + ""}</h3>
          </Col>
          <Col sm className="text-center hostDayMouth-view view">
            <h4>Просмотров в месяц</h4>
            <h3>{Math.round(props.host.hostDay / 12) + ""}</h3>
          </Col>
          <Col sm className="text-center hostDayDay-view view">
            <h4>Просмотров в день</h4>
            <h3>{Math.round(props.host.hostDay / 365) + ""}</h3>
          </Col>
        </Row>
        <Row>
          <Col sm className="text-center host-view view">
            <h4>Всего уникальных просмотров</h4>
            <h3>{props.host.hostUn + ""}</h3>
          </Col>
          <Col sm className="text-center hostDay-view view">
            <h4>Уникальных просмотров этом году</h4>
            <h3>{props.host.hostDayUn + ""}</h3>
          </Col>
          <Col sm className="text-center hostDayMouth-view view">
            <h4>Уникальных просмотров в месяц</h4>
            <h3>{Math.round(props.host.hostDayUn / 12) + ""}</h3>
          </Col>
          <Col sm className="text-center hostDayDay-view view">
            <h4>Уникальных просмотров в день</h4>
            <h3>{Math.round(props.host.hostDayUn / 365) + ""}</h3>
          </Col>
        </Row>
      </Col>
    );
  }
  return props.host.count !== undefined ? (
    content(props)
  ) : (
    <div style={styles.load}>
      <P5 />
    </div>
  );
}
