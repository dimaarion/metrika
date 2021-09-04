import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./css/metrika.css";
export default function HostPage(props) {
    function contents(props) {
  
        return (
         <Col key = {props.name + "page"} className = "pageRow"><Row><Col><h3>{props.name}</h3></Col><Col sm = "2" className = "mt-2">просмотров</Col><Col className = "mt-2">{props.hostViz}</Col></Row></Col>
         )
    }
    useEffect(() => {

    }, [])
    return (
        <Col className = "hostPage">{props.metrika.map((x) =>x.host.page.map((page)=>contents(page)))}</Col>
    )
}