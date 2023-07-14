import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPytorch,
  SiCsharp,
  SiPostgresql,
  SiTensorflow,
  SiWebgl,
  SiCplusplus,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", paddingTop: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <DiJava />
          <div className="icon-label">Java</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiCsharp />
          <div className="icon-label">C#</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiPython />
          <div className="icon-label">Python</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiJavascript1 />
          <div className="icon-label">Javascript</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiPostgresql />
          <div className="icon-label">PostgreSQL</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiGit />
          <div className="icon-label">Git</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiCplusplus />
          <div className="icon-label">C++</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiPytorch />
          <div className="icon-label">Pytorch</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiTensorflow />
          <div className="icon-label">Tensorflow</div>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiWebgl />
          <div className="icon-label">WebGL</div>
      </Col>
    </Row>
  );
}

export default Techstack;