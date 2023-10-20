import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Share extends React.Component {
  render() {
    return (
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container className="mt-0 mb-0">
          <Row className="row-grid align-items-center my-md">
            <Col lg="6">
              <h3 className="text-info font-weight-light mb-2">
                Thank you for supporting us!
              </h3>
              <h4 className="mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon btn-round"
                color="linkedin"
                href="#"
                id="tooltip877922017"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip877922017">
                Connect
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-round"
                color="primary"
                id="instagram"
                size="lg"
              >
                <i className="fab fa-instagram" />
              </Button>
              <UncontrolledTooltip delay={0} target="instagram">
                Follow
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-round"
                color="twitter"
                id="facebook"
                size="lg"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="facebook">
                Share
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Share;
