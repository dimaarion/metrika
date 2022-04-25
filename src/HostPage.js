import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CaretDown from "./CaretDown.js";
import CaretUp from "./CaretUp.js";
import { procent } from "./action";
import "./css/metrika.css";
import "./css/hostpage.css";
export default function HostPage(props) {
  const [sort, setSort] = useState(false);
  const [sortN, setSortN] = useState(false);
  const [sortM, setSortM] = useState(false);
  const [sortG, setSortG] = useState(false);
  const [sortP, setSortP] = useState([{}]);

  useEffect(() => {
    setSortP(
      props.host.sort(function (a, b) {
        if (sort === false) {
          if (a.hostVizD < b.hostVizD) {
            return -1;
          }
        } else {
          if (a.hostVizD > b.hostVizD) {
            return 1;
          }
        }
      })
    );
  }, [sort, props.host]);

  useEffect(() => {
    setSortP(
      props.host.sort(function (a, b) {
        if (sortN === false) {
          if (a.hostVizN < b.hostVizN) {
            return -1;
          }
        } else {
          if (a.hostVizN > b.hostVizN) {
            return 1;
          }
        }
      })
    );
  }, [sortN, props.host]);

  useEffect(() => {
    setSortP(
      props.host.sort(function (a, b) {
        if (sortM === false) {
          if (a.hostVizM < b.hostVizM) {
            return -1;
          }
        } else {
          if (a.hostVizM > b.hostVizM) {
            return 1;
          }
        }
      })
    );
  }, [sortM, props.host]);
  useEffect(() => {
    setSortP(
      props.host.sort(function (a, b) {
        if (sortG === false) {
          if (a.hostVizG < b.hostVizG) {
            return -1;
          }
        } else {
          if (a.hostVizG > b.hostVizG) {
            return 1;
          }
        }
      })
    );
  }, [sortG, props.host]);
  return (
    <div className="row">
      <div className="col-sm mt-3">
        <div className="boxes">
          <Col>
            <Row>
              <Col className="ml-4">
                <h4>Название статьи</h4>
              </Col>
              <Row>
                <Col>
                  <h4>Просмотры</h4>
                </Col>
              </Row>
              <Col className="col-5"></Col>
            </Row>
          </Col>
          <Col>
            <Row className="btn-primary">
              <Col className="text-center"></Col>
              <Col
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  setSort(sort === false ? true : false);
                  setSortP(
                    props.host.sort(function (a, b) {
                      if (sort === false) {
                        if (a.hostVizD < b.hostVizD) {
                          return -1;
                        }
                      } else if (sort === true) {
                        if (a.hostVizD < b.hostVizD) {
                          return 1;
                        }
                      }
                    })
                  );
                }}
              >
                Сегодня{" "}
                <Col>{sort === false ? <CaretUp /> : <CaretDown />}</Col>
              </Col>
              <Col
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  setSortN(sortN === false ? true : false);
                  setSortP(
                    props.host.sort(function (a, b) {
                      if (sortN === false) {
                        if (a.hostVizN < b.hostVizN) {
                          return -1;
                        }
                      } else if (sortN === true) {
                        if (a.hostVizN < b.hostVizN) {
                          return 1;
                        }
                      }
                    })
                  );
                }}
              >
                Неделя{" "}
                <Col>{sortN === false ? <CaretUp /> : <CaretDown />}</Col>
              </Col>
              <Col
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  setSortM(sortM === false ? true : false);
                  setSortP(
                    props.host.sort(function (a, b) {
                      if (sortM === false) {
                        if (a.hostVizM < b.hostVizM) {
                          return -1;
                        }
                      } else if (sortM === true) {
                        if (a.hostVizM < b.hostVizM) {
                          return 1;
                        }
                      }
                    })
                  );
                }}
              >
                Месяц<Col>{sortM === false ? <CaretUp /> : <CaretDown />}</Col>
              </Col>
              <Col
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  setSortG(sortG === false ? true : false);
                  setSortP(
                    props.host.sort(function (a, b) {
                      if (sortG === false) {
                        if (a.hostVizG < b.hostVizG) {
                          return -1;
                        }
                      } else if (sortG === true) {
                        if (a.hostVizG < b.hostVizG) {
                          return 1;
                        }
                      }
                    })
                  );
                }}
              >
                Год<Col>{sortG === false ? <CaretUp /> : <CaretDown />}</Col>
              </Col>
            </Row>
          </Col>

          <Col className="page">
            {sortP.map((page, i) => (
              <Row key={page.name + i} className="mt-2 hostPageCol">
                <div className="col-sm">{page.name}</div>
                <div className="col-sm text-center">{page.hostVizD}</div>
                <div className="col-sm text-center">{page.hostVizN}</div>
                <div className="col-sm text-center">{page.hostVizM}</div>
                <div className="col-sm text-center">{page.hostVizG}</div>
              </Row>
            ))}
          </Col>
        </div>
      </div>
      <div className="col-sm boxes pt-3 ">
        <svg width="500" height="300">
          {sortP
            .filter((f, i) => i < 3 && i % 2 === 0)
            .map((x, j) => (
              /* <div
              key={x.name + "grafic"}
              className="col-sm"
              style={{
                height: procent(300, x.hostVizD) + "px",
                marginTop: 300 - procent(300, x.hostVizD) + "px",
                backgroundColor: "blue"
              }}
            >
              {x.name}
            </div>*/
              <line
                key={x.name + "grafic"}
                stroke="red"
                x1={j * 100}
                y1={procent(300, x.hostVizD)}
                x2={j * 100 + 100}
                y2={procent(300, x.hostVizD)}
              />
            ))}
        </svg>
      </div>
    </div>
  );
}
