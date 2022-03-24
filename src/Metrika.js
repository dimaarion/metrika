import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { get, getLocal } from "./action";
import "./css/bootstrap.css";
import Host from "./Host";
import HostY from "./HostY";
export default function Metrika(props) {
  return (
    <Col className="metrika boxes">
      <Col className="pageRow hostPage">
        <Row>
          <Col>
            {" "}
            <h3>
              {props.d.getDate() +
                " " +
                props.mounth[props.d.getMonth()] +
                " " +
                props.d.getUTCFullYear() +
                " г."}
            </h3>
          </Col>
          <Col>
            {" "}
            <h3>{props.hour + " : " + props.min + " : " + props.sec + ""}</h3>
          </Col>
        </Row>
      </Col>
      <Col>
        <HostY hostY={props.hostY} mount={props.mount} />
      </Col>
      {/*props.host.map((m, i) => (
        <Host key={m.id + "host"} host={m} />
      ))*/}
      {/*metrika
        .filter((f) => f.name === "hostPage")
        .map((m, i) => (
          <HostPage key={m.name} metrika={m.content} />
        ))*/}
    </Col>
  );
}
