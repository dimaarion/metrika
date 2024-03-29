import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { get, getLocal } from "./action";
import "./css/bootstrap.css";
import Host from "./Host";
import HostPage from "./Host";
export default function Metrika(props) {
  return (
    <Col className="boxes">
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
        {
          <Host
            hostY={props.hostY}
            mount={props.mount}
            hostPage={props.hostPage}
          />
        }
      </Col>
    </Col>
  );
}
