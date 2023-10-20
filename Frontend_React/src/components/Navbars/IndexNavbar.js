import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  FormGroup,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledAlert
} from "reactstrap";

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
      demoModal: false,
      miniModal: false,
      formModal: false,

      Email: '',
      Password: '',
      LoginMessage: '',
      isLoginMessage: false
    };
    this.Password = this.Password.bind(this);
    this.Email = this.Email.bind(this);
    this.login = this.login.bind(this);
  }

  Email(event) {
    this.setState({ Email: event.target.value })
  }
  Password(event) {
    this.setState({ Password: event.target.value })
  }

  login() {
    fetch(process.env.REACT_APP_API+'Member/Login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Email: this.state.Email,
        Password: this.state.Password
      })
    }).then((Response) => Response.json())
      .then(async (result) => {
        if (!result.IsEmailExist){
          // alert('Invalid User');
          this.LoginMessage = 'Invalid Email ! Please try again.'
          this.toggleNotification('isLoginMessage');
        }
        else if(result.IsEmailExist && !result.IsValidPassword){
          // alert('Invalid Password');
          this.LoginMessage = 'Invalid Password ! Please try again.'
          this.toggleNotification('isLoginMessage');
        }
        else{
          // message
          this.LoginMessage = 'Welcome Back '+result.FirstName+' '+result.LastName;
          this.toggleNotification('isLoginMessage');
          await this.sleep(2000);
          // store member informations
          var currentMember = {
            Id : result.Id,
            FirstName : result.FirstName,
            LastName : result.LastName,
            Email : result.Email,
            Level : result.Level,
            Cellule : result.Cellule,
            Role : result.Role
          }
          localStorage.setItem('currentMember', JSON.stringify(currentMember));
          // refrech the page
          window.location.reload();
        }
      })
  }

  sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  LogOut(){
    localStorage.clear();
    window.location.reload();
    // tag={Link} to="/"
  }

  toggleNotification = async modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
    await this.sleep(3000);
    this.setState({
      [modalState]: false
    });
  };


  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
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
  scrollToCourses = () => {
    document
      .getElementById("section-courses")
      .scrollIntoView({ behavior: "smooth" });
  };


  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
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
              <span>GI-Club</span>
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
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  Getting started
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem 
                    tag={Link}
                    onClick={this.scrollToAbout}
                    >
                    <i className="tim-icons icon-tag" />
                    About Club
                  </DropdownItem>
                  <DropdownItem 
                    tag={Link}
                    onClick={this.scrollToFeatures}
                    >
                    <i className="tim-icons icon-puzzle-10" />
                    Features
                  </DropdownItem>
                  <DropdownItem 
                    tag={Link}
                    onClick={this.scrollToTeam}
                    >
                    <i className="tim-icons icon-badge" />
                    Steering Team
                  </DropdownItem>
                  <DropdownItem 
                    tag={Link}
                    onClick={this.scrollToEvents}
                    >
                    <i className="tim-icons icon-calendar-60" />
                    Last Events
                  </DropdownItem>
                  <DropdownItem 
                    tag={Link}
                    onClick={this.scrollToCourses}
                    >
                    <i className="tim-icons icon-components" />
                    Courses Dashboard
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {
                localStorage.getItem('currentMember') ?
                <>
                  <NavItem>
                    <Button
                      tag={Link} to="/profile-page"
                      className="nav-link d-none d-lg-block"
                      color="info"
                      >
                      <i className="tim-icons icon-single-02" /> Profil
                    </Button>
                  </NavItem>
                  <NavItem>
                    <Button
                      className="nav-link d-none d-lg-block"
                      color="warning"
                      onClick={this.LogOut}
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
        {
          localStorage.getItem('currentMember') ? 
          <></>:
          <Modal
            modalClassName="modal-black"
            isOpen={this.state.formModal}
            toggle={() => this.toggleModal("formModal")}
          >
            <div className="modal-header justify-content-center">
              <button
                className="close"
                onClick={() => this.toggleModal("formModal")}
              >
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Sign in</h3>
              </div>
            </div>
            <div className="modal-body">
              <UncontrolledAlert 
              isOpen={this.state.isLoginMessage}
              toggle={() => this.toggleNotification("isLoginMessage")}
              className="alert-with-icon"
              color={
                (this.LoginMessage === ("Invalid Email ! Please try again.") 
                || this.LoginMessage === ("Invalid Password ! Please try again."))?
                "danger"
                :
                "success"
              }
              >
                <span 
                data-notify="icon"
                className=
                {
                  (this.LoginMessage === ("Invalid Email ! Please try again.") 
                  || this.LoginMessage === ("Invalid Password ! Please try again."))?
                  "tim-icons icon-alert-circle-exc"
                  :
                  "tim-icons icon-check-2"
                }
                />
                <span className="text-center">
                  {this.LoginMessage}
                </span>
              </UncontrolledAlert>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": this.state.emailFocus
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={e => this.setState({ emailFocus: true })}
                      onBlur={e => this.setState({ emailFocus: false })}
                      onChange={this.Email}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": this.state.passwordFocus
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onFocus={e => this.setState({ passwordFocus: true })}
                      onBlur={e => this.setState({ passwordFocus: false })}
                      onChange={this.Password}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup check className="mt-3">
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Remember me !
                  </Label>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button"
                  onClick = {this.login}
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
        }
        
      </Navbar>
      
    );
  }
}

export default ComponentsNavbar;
