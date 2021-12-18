import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CaretDown from "./CaretDown.js";
import CaretUp from "./CaretUp.js";
import "./css/metrika.css";
export default function HostPage(props) {
    const [sort, setSort] = useState(false);
    function contents(props) {
        return (
            <Col key={props.name + "page"} className="pageRow"><Row><Col><h3>{props.name}</h3></Col><Col className="mt-2">{props.hostViz}</Col></Row></Col>
        )
    }

    return (
        <Col className="hostPage">
            <Col>
                <Row>
                    <Col className="ml-4"><h4>Название статьи</h4></Col>
                    <Row style={{ cursor: "pointer" }} onClick={(e) => setSort(sort === false ? true : false)}><Col><h4>Просмотры</h4></Col><Col>{sort === false ? <CaretUp /> : <CaretDown />}</Col></Row>
                    <Col className="col-5"></Col>
                </Row>
            </Col>

            <Col className="page">{props.metrika.map((x) => x.host.page.sort(function (a, b) {
                if (sort === false) {
                    
                    if (a.hostViz < b.hostViz) {
                        
                        return -1;
                    }
                } else {
                    if (a.hostViz > b.hostViz) {
                        return -1;
                    }
                }

            }).map((page) => contents(page)))}</Col>
        </Col>


    )
}