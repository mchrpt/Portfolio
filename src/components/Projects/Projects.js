import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import imperius from "../../Assets/Projects/imperius.jpg";
import softeng from "../../Assets/Projects/softeng.png";
import assistments from "../../Assets/Projects/assistments.jpg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Projects and Other <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Several projects I have worked on in my academic career.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imperius}
              linkTo="Imperius"
              isBlog={false}
              title="Imperius"
              description="Imperius is a 3D space RTS game that I have been the lead developer on and off for the last 3 years. I am currently finishing it up for my Major Qualifying Project (year long capstone) at Worcester Polytechnic Institute."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://mchrpt.itch.io/Imperius"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={softeng}
              linkTo="softeng"
              isBlog={false}
              title="Brigham and Woman's Hospital Tracking System"
              description="WPI’s CS3733 Software Engineering D22 class in collaboration with Brigham & Women’s Hospital. Applying the agile development methodologies and software design patterns in Java to create a medical equipment tracking and workflow application to demo features to the hospital representatives that they may consider implementing."
              ghLink="https://github.com/mchrpt/Hospital-Application"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assistments}
              linkTo="assistments"
              isBlog={false}
              title="Machine Learning with ASSISTments"
              description="An IQP (Interactive Qualifying Project) for course credit at WPI using SQL and Python to add features to the award winning ASSISTments learning software. I did research on several methods using contextual bandits to attempt to predict next problem correctness of students answering questions."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://digitalwpi.wpi.edu/concern/student_works/2801pk90w?locale=en"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
