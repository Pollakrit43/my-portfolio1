import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import frontendImg1 from "../assets/img/frontend-img1.png";
import frontendImg2 from "../assets/img/frontend-img2.png";
import frontendImg3 from "../assets/img/frontend-img3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "react-gpt-frontend",
      description: "Frontend Developer",
      imgUrl: frontendImg1,
    },
    {
      title: "react-myportfolio",
      description: "Frontend Developer",
      imgUrl: frontendImg2,
    },
    {
      title: "netflix-clone-responsive",
      description: "Frontend Developer",
      imgUrl: frontendImg3,
    },
    {
      title: "react-bb-restaurant-frontend",
      description: "Frontend Developer",
      imgUrl:
        "https://camo.githubusercontent.com/5e2fdd495f94c23aa4fd1d0d7925346c493f9b5ea87b42078b6e92a5148521f1/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3930393132323337343439323838393134382f313134383233333634393037393230393939342f696d6167652e706e67",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {/* <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {/* <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row> */}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
