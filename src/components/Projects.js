import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility offset={500}>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque accusantium nihil praesentium explicabo pariatur.
                    Rem, natus sunt temporibus.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center alig-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <TrackVisibility offset={1000} partialVisibility>
                {({ isVisible }) => (
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => {
                          return <ProjectCards key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {" "}
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque quam, quod neque provident velit, rem explicabo
                        excepturi id illo molestiae blanditiis, eligendi dicta
                        officiis asperiores delectus quasi inventore debitis
                        quo.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {" "}
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque quam, quod neque provident velit, rem explicabo
                        excepturi id illo molestiae blanditiis, eligendi dicta
                        officiis asperiores delectus quasi inventore debitis
                        quo.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                )}
              </TrackVisibility>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="Image" className="background-img-right" />
    </section>
  );
};
