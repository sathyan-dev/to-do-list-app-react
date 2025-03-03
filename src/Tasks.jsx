import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import "./App.css";
import { Link } from "react-router-dom";
import { MytaskContext } from "./App";

let Tasks = () => {
  let { tasks, setTasks } = useContext(MytaskContext);
  let [completedTasks, setCompletedtasks] = useState({});

  let completeButton = (index) => {
    setCompletedtasks((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  let deleteButton = (index) => {
    let updatedtasks = [...tasks];
    updatedtasks.splice(index, 1);
    setTasks(updatedtasks);
  };

  return (
    <div id="maintask">
      <div id="home-1">
        <Container id="btns">
          <Row>
            <Col className="cols">
              <Link className="links" to={"/home"}>
                <Button className="btns" variant="outline-primary">
                  Home
                </Button>
              </Link>
            </Col>
            <Col className="cols">
              <Link className="links" to="/tasks">
                <Button className="btns" variant="outline-primary">
                  Tasks
                </Button>
              </Link>
            </Col>
            <Col className="cols">
              <Link className="links" to="/addtask">
                <Button className="btns" variant="outline-primary">
                  Add Task
                </Button>
              </Link>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h3 style={{ textDecoration: "underline" }}>To-Do List</h3>
            </Col>
          </Row>
          <br />
          <Row>
            <br />
            <Container>
              {tasks.length === 0 ? (
                <p>NO TASKS HERE</p>
              ) : (
                tasks.map((element, index) => (
                  <div key={index}>
                    <Row>
                      <Stack direction="horizontal" gap={3} className="stack">
                        <span
                          style={{
                            textDecoration: completedTasks[index]
                              ? "line-through"
                              : "none",
                            textAlign: "left",
                          }}
                        >
                          {index + 1}. {element.toUpperCase()}
                        </span>
                        <Button
                          onClick={() => completeButton(index)}
                          variant="success"
                        >
                          Complete
                        </Button>
                        <div className="vr" />
                        <Button
                          onClick={() => deleteButton(index)}
                          variant="outline-danger"
                        >
                          Delete
                        </Button>
                      </Stack>
                    </Row>
                    <br />
                  </div>
                ))
              )}
            </Container>
          </Row>
        </Container>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Tasks;
