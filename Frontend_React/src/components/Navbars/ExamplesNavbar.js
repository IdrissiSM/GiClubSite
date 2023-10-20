import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class PagesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              tag={Link}
              id="navbar-brand"
              onClick={this.scrollToPageHeader}
            >
              <span>GI-Club </span>
              site officiel 
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              GI-Club
            </UncontrolledTooltip>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    GI-Club
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.linkedin.com/in/club-genie-informatique-a4985520a/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Linkedin"
                >
                  <i className="fab fa-linkedin" />
                  <p className="d-lg-none d-xl-none">LinkedIn</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/ClubGIENSAO.2021"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <i className="fab fa-facebook-square" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/club_gi_ensao/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  <i className="fab fa-instagram" />
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
              </NavItem>
              {
                localStorage.getItem('currentMember') ?
                <>
                  <NavItem>
                    <Button
                      tag={Link} to="/"
                      className="nav-link d-none d-lg-block"
                      color="info"
                      >
                      <i className="tim-icons icon-components" /> Back to Home
                    </Button>
                  </NavItem>
                  <NavItem>
                    <Button
                      className="nav-link d-none d-lg-block"
                      color="warning"
                      tag={Link} to="/"
                      >
                      <i className="tim-icons icon-button-power" /> Log out
                    </Button>
                  </NavItem>
                </>
                : 
                <>
                  <NavItem>
                    <Button
                      className="nav-link d-none d-lg-block"
                      color="success"
                      onClick={() => this.toggleModal("formModal")}
                      >
                      <i className="tim-icons icon-link-72" /> Member
                    </Button>
                  </NavItem>
                  <NavItem>
                    <Button
                      className="nav-link d-none d-lg-block"
                      color="default"
                      onClick={this.scrollToContact}
                    >
                      <i className="tim-icons icon-send" /> Contact
                    </Button>
                  </NavItem>
                </>
              }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PagesNavbar;
