import React from "react";
import { Col, Row } from "react-bootstrap";
let d = new Date();
export default function Footer(props) {
  return (
    <Col className="text-center footer p-0">
      <div className="pt-3">2016 - {d.getFullYear()}</div>
    </Col>
  );
}
