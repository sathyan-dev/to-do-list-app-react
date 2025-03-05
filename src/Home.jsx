import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

let Home = () => {
  return (
    <div id="homemain">
      <div
        id="home-1"
        className="d-flex justify-content-center align-items-center w-100 h-100"
      >
        <Container fluid id="btns">
          <Row>
            <Col className="cols mb-2 text-center" lg={4} md={12} xs={12}>
              <Link className="links" to={"/home"}>
                <Button className="btns" variant="outline-primary">
                  Home
                </Button>
              </Link>
            </Col>
            <Col className="cols mb-2 text-center" lg={4} md={12} xs={12}>
              <Link className="links" to="/tasks">
                <Button className="btns" variant="outline-primary">
                  Tasks
                </Button>
              </Link>
            </Col>
            <Col className="cols mb-2 text-center" lg={4} md={12} xs={12}>
              <Link className="links" to="/addtask">
                <Button className="btns" variant="outline-primary">
                  Add Task
                </Button>
              </Link>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="text-center">
              <h3>Welcome to To-do List App</h3>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
