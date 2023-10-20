import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Badge,
} from "reactstrap";

let ps = null;

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs1: 1,
      tabs2: 1,
      tabs3: 1,
      tabs4: 1,
      tabs5: 1,
      tabs6: 1,
      tabs7: 1,
      tabs8: 1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <div className="wrapper">
            <div className="space-50"></div>
            <section className="section section-lg" id="section-team">
              <div className="title">
                <h1>Steering Team</h1>
              </div>
              <div className="space-50"></div>
              <section className="section section-lg">
                <img
                  alt="..."
                  className="dots"
                  src={require("assets/img/dots.png")}
                />
                <img
                  alt="..."
                  className="path"
                  src={require("assets/img/path4.png")}
                />
                <Container className="align-items-center">
                  <Row>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid rounded-circle"
                            src={require("assets/img/mharzi.jpg")}
                          />
                          <h4 className="title">Chaymae Mharzi</h4>
                          <div className="text-center">
                            <Badge className="badge-neutral">Vice Presidente</Badge>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <Nav
                            className="nav-tabs-primary justify-content-center"
                            tabs
                          >
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs1 === 1
                                })}
                                onClick={e => this.toggleTabs(e, "tabs1", 1)}
                                href="#pablo"
                              >
                                About
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs1 === 2
                                })}
                                onClick={e => this.toggleTabs(e, "tabs1", 2)}
                                href="#pablo"
                              >
                                Contact
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent
                            className="tab-subcategories"
                            activeTab={"tab" + this.state.tabs1}
                          >
                            <TabPane tabId="tab1">
                              <p>
                              Success is peace of mind, which is a direct result 
                              of motivation and self-satisfaction in knowing you made
                              the effort to become the best of which you are capable. <br />
                              </p>
                            </TabPane>
                            <TabPane tabId="tab2">
                              <Nav className="ml-auto" navbar>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-facebook-square" />
                                    Chaymae Mharzi
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-linkedin" />
                                    Chaymae Mharzi
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-instagram" />
                                    chaymae.mhz
                                  </NavLink>
                                </NavItem>
                              </Nav>
                            </TabPane>
                          </TabContent>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid rounded-circle"
                            src={require("assets/img/salah.jpeg")}
                          />
                          <h4 className="title">Sbai Salah</h4>
                          <div className="text-center">
                            <Badge className="badge-neutral">President</Badge>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <Nav
                            className="nav-tabs-primary justify-content-center"
                            tabs
                          >
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs2 === 1
                                })}
                                onClick={e => this.toggleTabs(e, "tabs2", 1)}
                                href="#pablo"
                              >
                                About
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs2 === 2
                                })}
                                onClick={e => this.toggleTabs(e, "tabs2", 2)}
                                href="#pablo"
                              >
                                Contact
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent
                            className="tab-subcategories"
                            activeTab={"tab" + this.state.tabs2}
                          >
                            <TabPane tabId="tab1">
                              <p>
                              Take up one idea. Make that one idea your life–think of it, dream of it, 
                              live on that idea. Let the brain be full of that idea, 
                              and just leave every other idea alone.
                              This is the way to success. <br />
                              </p>
                            </TabPane>
                            <TabPane tabId="tab2">
                              <Nav className="ml-auto" navbar>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-facebook-square" />
                                    salah mhsb
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-linkedin" />
                                    salah.sbai
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-instagram" />
                                    salah.mhsb
                                  </NavLink>
                                </NavItem>
                              </Nav>
                            </TabPane>
                          </TabContent>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid rounded-circle"
                            src={require("assets/img/soukayna.jpg")}
                          />
                          <h4 className="title">Soukaina El Houta</h4>
                          <div className="text-center">
                            <Badge className="badge-neutral">Treasury & general secretary</Badge>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <Nav
                            className="nav-tabs-primary justify-content-center"
                            tabs
                          >
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs3 === 1
                                })}
                                onClick={e => this.toggleTabs(e, "tabs3", 1)}
                                href="#pablo"
                              >
                                About
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs3 === 2
                                })}
                                onClick={e => this.toggleTabs(e, "tabs3", 2)}
                                href="#pablo"
                              >
                                Contact
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent
                            className="tab-subcategories"
                            activeTab={"tab" + this.state.tabs3}
                          >
                            <TabPane tabId="tab1">
                              <p>
                              There are two types of people who will tell you that you cannot make a difference in this world: 
                              those who are afraid to try and those who are afraid you will succeed.<br />
                              </p>
                            </TabPane>
                            <TabPane tabId="tab2">
                              <Nav className="ml-auto" navbar>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-facebook-square" />
                                    salah mhsb
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-linkedin" />
                                    salah.sbai
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-instagram" />
                                    salah.mhsb
                                  </NavLink>
                                </NavItem>
                              </Nav>
                            </TabPane>
                          </TabContent>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <div className="space-100"></div>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid rounded-circle"
                            src={require("assets/img/sghiouri.jpeg")}
                          />
                          <h4 className="title">Sghiouri El Idrissi Mohammed</h4>
                          <div className="text-center">
                            <Badge className="badge-neutral">Formations</Badge>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <Nav
                            className="nav-tabs-primary justify-content-center"
                            tabs
                          >
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs4 === 1
                                })}
                                onClick={e => this.toggleTabs(e, "tabs4", 1)}
                                href="#pablo"
                              >
                                About
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs4 === 2
                                })}
                                onClick={e => this.toggleTabs(e, "tabs4", 2)}
                                href="#pablo"
                              >
                                Contact
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent
                            className="tab-subcategories"
                            activeTab={"tab" + this.state.tabs4}
                          >
                            <TabPane tabId="tab1">
                              <p>
                                All our dreams can come true, if we have the motivation and courage to pursue them. <br/>
                                Do what you can, with what you’ve got, where you are.<br />
                              </p>
                            </TabPane>
                            <TabPane tabId="tab2">
                              <Nav className="ml-auto" navbar>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-facebook-square" />
                                    Sghiouri El Idrissi Mohammed
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-linkedin" />
                                    Sghiouri El Idrissi Mohammed
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-instagram" />
                                    sghi_ouri_49
                                  </NavLink>
                                </NavItem>
                              </Nav>
                            </TabPane>
                          </TabContent>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid rounded-circle"
                            src={require("assets/img/bilal.jpg")}
                          />
                          <h4 className="title">Oumehdi Bilal</h4>
                          <div className="text-center">
                            <Badge className="badge-neutral">logistics</Badge>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <Nav
                            className="nav-tabs-primary justify-content-center"
                            tabs
                          >
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs5 === 1
                                })}
                                onClick={e => this.toggleTabs(e, "tabs5", 1)}
                                href="#pablo"
                              >
                                About
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs5 === 2
                                })}
                                onClick={e => this.toggleTabs(e, "tabs5", 2)}
                                href="#pablo"
                              >
                                Contact
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent
                            className="tab-subcategories"
                            activeTab={"tab" + this.state.tabs5}
                          >
                            <TabPane tabId="tab1">
                              <p>
                              The reason most people never reach their goals is that they don’t define them, 
                              or ever seriously consider them as achievable. 
                              Winners can tell you what they plan to do along the way.<br />
                              </p>
                            </TabPane>
                            <TabPane tabId="tab2">
                              <Nav className="ml-auto" navbar>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-facebook-square" />
                                    Bilal Oumehdi
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-linkedin" />
                                    Bilal Oumehdi
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-instagram" />
                                    bilal__oum
                                  </NavLink>
                                </NavItem>
                              </Nav>
                            </TabPane>
                          </TabContent>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <div className="space-100"></div>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid rounded-circle"
                            src={require("assets/img/bekal.png")}
                          />
                          <h4 className="title">El Beqqal Chaimae</h4>
                          <div className="text-center">
                            <Badge className="badge-neutral">Design</Badge>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <Nav
                            className="nav-tabs-primary justify-content-center"
                            tabs
                          >
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs7 === 1
                                })}
                                onClick={e => this.toggleTabs(e, "tabs7", 1)}
                                href="#pablo"
                              >
                                About
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs7 === 2
                                })}
                                onClick={e => this.toggleTabs(e, "tabs7", 2)}
                                href="#pablo"
                              >
                                Contact
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent
                            className="tab-subcategories"
                            activeTab={"tab" + this.state.tabs7}
                          >
                            <TabPane tabId="tab1">
                              <p>
                              Perseverance is a great element of success. <br/>
                              If you only knock long enough and loud enough at the gate, 
                              you are sure to wake up somebody. <br />
                              </p>
                            </TabPane>
                            <TabPane tabId="tab2">
                              <Nav className="ml-auto" navbar>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-facebook-square" />
                                    El Beqqal Chaimae
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-linkedin" />
                                    Beqqal Chaimae
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-instagram" />
                                    elbeqqal_chaimae
                                  </NavLink>
                                </NavItem>
                              </Nav>
                            </TabPane>
                          </TabContent>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid rounded-circle"
                            src={require("assets/img/assia.jpeg")}
                          />
                          <h4 className="title">Jabri Assia</h4>
                          <div className="text-center">
                            <Badge className="badge-neutral">Redaction</Badge>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <Nav
                            className="nav-tabs-primary justify-content-center"
                            tabs
                          >
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs8 === 1
                                })}
                                onClick={e => this.toggleTabs(e, "tabs8", 1)}
                                href="#pablo"
                              >
                                About
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs8 === 2
                                })}
                                onClick={e => this.toggleTabs(e, "tabs8", 2)}
                                href="#pablo"
                              >
                                Contact
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent
                            className="tab-subcategories"
                            activeTab={"tab" + this.state.tabs8}
                          >
                            <TabPane tabId="tab1">
                              <p>
                              On my own I will just create and if it works, it works. 
                              And if it doesn’t, I’ll just create something else. 
                              I don’t have any limitations on what I think I could do or be. <br />
                              </p>
                            </TabPane>
                            <TabPane tabId="tab2">
                              <Nav className="ml-auto" navbar>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-facebook-square" />
                                    Assia Jabri
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-linkedin" />
                                    Assia Jabri
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-instagram" />
                                    assia_jabri
                                  </NavLink>
                                </NavItem>
                              </Nav>
                            </TabPane>
                          </TabContent>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid rounded-circle"
                            src={require("assets/img/ibtissam.JPG")}
                          />
                          <h4 className="title">Neggaoui Ibtissam</h4>
                          <div className="text-center">
                            <Badge className="badge-neutral">Media</Badge>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <Nav
                            className="nav-tabs-primary justify-content-center"
                            tabs
                          >
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs6 === 1
                                })}
                                onClick={e => this.toggleTabs(e, "tabs6", 1)}
                                href="#pablo"
                              >
                                About
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({
                                  active: this.state.tabs6 === 2
                                })}
                                onClick={e => this.toggleTabs(e, "tabs6", 2)}
                                href="#pablo"
                              >
                                Contact
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent
                            className="tab-subcategories"
                            activeTab={"tab" + this.state.tabs6}
                          >
                            <TabPane tabId="tab1">
                              <p>
                                These cases are perfectly simple and easy to
                                distinguish. In a free hour, when our power of choice is
                                untrammelled and when nothing prevents our being able to
                                do what we like. <br />
                              </p>
                            </TabPane>
                            <TabPane tabId="tab2">
                              <Nav className="ml-auto" navbar>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-facebook-square" />
                                    neggaoui Ibtissam
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-linkedin" />
                                    neggaoui Ibtissam
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                    <i className="fab fa-instagram" />
                                    Ibtissam_negg
                                  </NavLink>
                                </NavItem>
                              </Nav>
                            </TabPane>
                          </TabContent>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </section>
            </section>
        </div>
      </>
    );
  }
}

export default Team;
