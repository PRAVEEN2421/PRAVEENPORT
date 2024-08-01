import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.png";
import rendom from "../../Assets/Projects/rendom colour.png";
import analog from "../../Assets/Projects/analogclock.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={analog}
              isBlog={false}
              title="ANALOG CLOCK"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/PRAVEEN2421/ANALOGCLOCK"
              demoLink="https://praveen2421.github.io/ANALOGCLOCK/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rendom}
              isBlog={false}
              title="RANDOM COLOUR CHANGE"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/PRAVEEN2421/RANDOM-COLOR"
              demoLink="https://praveen2421.github.io/RANDOM-COLOR/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="STUDENT CALCULATOR"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/PRAVEEN2421/STCalculator"
              demoLink=" https://praveen2421.github.io/STCalculator/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
