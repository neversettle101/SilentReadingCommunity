import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import cubbonreads_ht from "../assets/img/HT_CubbonReads.jpg";
import projImg2 from "../assets/img/project-img2.png";
import punereads from "../assets/img/punereads.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const AboutUs = () => {

  const projects = [
    {
      title: "Hindustan Time Feature",
      description: "How Cubbon Park’s book clubs are connecting Bengaluru’s reading community",
      imgUrl: cubbonreads_ht,
      link: "https://www.thehindu.com/news/cities/bangalore/how-cubbon-parks-book-clubs-are-connecting-bengalurus-reading-community/article66888022.ece",
    },
    {
      title: "Cubbon Reads",
      description: " A Silent Reading Revolution Spreads Across Parks",
      imgUrl: projImg2,
      link: "https://brindasnarayan.com/cubbonreads/",
    },
    {
      title: "Pune Reads",
      description: "A Vibrant Silent Reading Community for Book Lovers",
      imgUrl: punereads,
      link: "https://www.mypunepulse.com/pune-reads-a-vibrant-silent-reading-community-for-book-lovers/",
    },
  ];

  return (
    <section className="project" id="AboutUS">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About US</h2>
                <p>Cubbon Reads is a global community initiative that began in January 2023 with the simple idea of gathering in parks to read silently together. Founded by Shruti Sah and Harsh Snehanshu in Bangalore's Cubbon Park, it quickly grew from a small group of friends to an international movement across 70 cities and four continents. The community meets every Saturday to read in silence, providing a peaceful escape from the distractions of modern life. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">How to Join</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Read More</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>There's no entry fee, no registration required, no formality. Just show up with a mat and a book. Note that this is not a book club, it is a reading community. We don't engage in book discussions or book exchanges. Come whenever, leave whenever.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
