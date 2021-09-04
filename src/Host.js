import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./css/metrika.css";
export default function Host(props) {
    function contents(props) {

        return (
            <Col>
                <Row>
                    <Col sm className="text-center host-view view">
                        <h4>Всего просмотров</h4>
                        <h3>{props.host.count}</h3>
                    </Col>
                    <Col sm className="text-center hostDay-view view">
                        <h4>Просмотров этом году</h4>
                        <h3>{props.host.hostDay}</h3>
                    </Col>
                    <Col sm className="text-center hostDayMouth-view view">
                        <h4>Просмотров в месяц</h4>
                        <h3>{Math.round(props.host.hostDay / 12)}</h3>
                    </Col>
                    <Col sm className="text-center hostDayDay-view view">
                        <h4>Просмотров в день</h4>
                        <h3>{Math.round(props.host.hostDay / 365)}</h3>
                    </Col>
                </Row>
                 <Row>
                    <Col sm className="text-center host-view view">
                        <h4>Всего уникальных просмотров</h4>
                        <h3>{props.host.hostUn}</h3>
                    </Col>
                    <Col sm className="text-center hostDay-view view">
                        <h4>Уникальных просмотров этом году</h4>
                        <h3>{props.host.hostDayUn}</h3>
                    </Col>
                    <Col sm className="text-center hostDayMouth-view view">
                        <h4>Уникальных просмотров в месяц</h4>
                        <h3>{Math.round(props.host.hostDayUn / 12)}</h3>
                    </Col>
                    <Col sm className="text-center hostDayDay-view view">
                        <h4>Уникальных просмотров в день</h4>
                        <h3>{Math.round(props.host.hostDayUn / 365)}</h3>
                    </Col>
                </Row>
            </Col>

        )
    }
    useEffect(() => {

    }, [])
    return (
        <Col>{props.metrika.map((x) => <div key={x.id + "host"}>{contents({ host: x.host })}</div>)}</Col>
    )
}