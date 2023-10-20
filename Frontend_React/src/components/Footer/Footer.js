import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {

  // scroll functions
  scrollToContact = () => {
    document
      .getElementById("contact-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToPageHeader = () => {
    document
      .getElementById("page-header")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToNotifications = () => {
    document
      .getElementById("section-notifications")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToAbout = () => {
    document
      .getElementById("section-about")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToFeatures = () => {
    document
      .getElementById("section-features")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToTeam = () => {
    document
      .getElementById("section-team")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToEvents = () => {
    document
      .getElementById("section-events")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToSignin = () => {
    document
      .getElementById("section-signin")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToCourses = () => {
    document
      .getElementById("section-courses")
      .scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h2 className="title">GI-Club</h2>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink tag={Link} onClick={this.scrollToPageHeader}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} onClick={this.scrollToAbout}>
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} onClick={this.scrollToFeatures}>
                    Features
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} onClick={this.scrollToTeam}>
                    Steering Team
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink tag={Link} onClick={this.scrollToEvents}>
                    Events
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} onClick={this.scrollToCourses}>
                    Courses
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} onClick={this.scrollToContact}>
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <h3 className="title">Follow us:</h3>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.instagram.com/club_gi_ensao/"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  Follow
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.facebook.com/ClubGIENSAO.2021"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  Like
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.linkedin.com/in/club-genie-informatique-a4985520a/"
                  id="tooltip318450378"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450378">
                  Connect
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
            <div className="text-center">
              ©2022 club genie informatique
            </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;