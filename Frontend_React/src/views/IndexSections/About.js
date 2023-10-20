import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

class Features extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <section className=" section-lg" id="section-about">
              <section className="section" id="section-about">
                <img
                  alt="..."
                  className="path"
                  src={require("assets/img/path4.png")}
                />
                <Container>
                  <Row className="row-grid justify-content-between">
                    <Col className="mt-lg-5" md="5">
                      <Row>
                        <Col className="px-2 py-2" lg="6" sm="12">
                          <Card className="card-stats">
                            <CardBody>
                              <Row>
                                <Col md="4" xs="5">
                                  <div className="icon-big text-center icon-success">
                                    <i className="tim-icons icon-single-02 text-success" />
                                  </div>
                                </Col>
                                <Col md="8" xs="7">
                                  <div className="numbers">
                                    <CardTitle tag="p">77</CardTitle>
                                    <p />
                                    <p className="card-category">Members</p>
                                  </div>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col className="px-2 py-2" lg="6" sm="12">
                          <Card className="card-stats upper bg-default">
                            <CardBody>
                              <Row>
                                <Col md="4" xs="5">
                                  <div className="icon-big text-center icon-primary">
                                    <i className="tim-icons icon-pin text-primary" />
                                  </div>
                                </Col>
                                <Col md="8" xs="7">
                                  <div className="numbers">
                                    <CardTitle tag="p">76</CardTitle>
                                    <p />
                                    <p className="card-category">Instagram Posts</p>
                                  </div>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="px-2 py-2" lg="6" sm="12">
                          <Card className="card-stats">
                            <CardBody>
                              <Row>
                                <Col md="4" xs="5">
                                  <div className="icon-big text-center icon-info">
                                    <i className="tim-icons icon-spaceship text-info" />
                                  </div>
                                </Col>
                                <Col md="8" xs="7">
                                  <div className="numbers">
                                    <CardTitle tag="p">6</CardTitle>
                                    <p />
                                    <p className="card-category">Year Activities</p>
                                  </div>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col className="px-2 py-2" lg="6" sm="12">
                          <Card className="card-stats">
                            <CardBody>
                              <Row>
                                <Col md="4" xs="5">
                                  <div className="icon-big text-center icon-danger">
                                    <i className="tim-icons icon-heart-2 text-danger" />
                                  </div>
                                </Col>
                                <Col md="8" xs="7">
                                  <div className="numbers">
                                    <CardTitle tag="p">1.4 K</CardTitle>
                                    <p />
                                    <p className="card-category">Followers</p>
                                  </div>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="6">
                      <div className="pl-md-5">
                        <h1>
                          Large <br />
                          Achivements
                        </h1>
                        <p>
                          The purpose of the Computer Science Club is to create a space for students to connect 
                          and grow their technical and soft skills outside of the classroom. Also to make interested students 
                          in touch on our social media to share a lot of useful concepts.
                        </p>
                        <br />
                        <p>
                          This includes providing personal and professional development workshops, 
                          giving members opportunities to have impressive participations and projects,
                          and connecting them with more professionals in the industry.
                        </p>
                        <br />
                        {/* <a
                          className="font-weight-bold text-info mt-5"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Show all{" "}
                          <i className="tim-icons icon-minimal-right text-info" />
                        </a> */}
                      </div>
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

export default Features;
