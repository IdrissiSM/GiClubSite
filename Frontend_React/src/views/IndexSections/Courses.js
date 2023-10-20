import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Examples extends React.Component {
  render() {
    return (
      <div className="section section-courses" id="section-courses" data-background-color="black">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <div className="title">
          <h1>Club Courses Dashboard</h1>
        </div>
        <div className="space-50" />
        <Container className="text-center">
          <Row>
            <Col sm="6">
              <a 
                target="_blank"
                rel="noopener noreferrer"
                href="http://giclubsiteensao.000webhostapp.com/espace_etudiant_gi/authentification.php">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/dashboard2.PNG")}
                />
              </a>
            </Col>
            <Col sm="6">
              <a
                target="_blank" 
                rel="noopener noreferrer"
                href="http://giclubsiteensao.000webhostapp.com/espace_etudiant_gi/authentification.php">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/dashboard1.PNG")}
                />
              </a>
            </Col>
          </Row>
            <div className="space-50"></div>
            <Button
            target="_blank"
            rel="noopener noreferrer"
            className="btn-simple btn-round"
            color="primary"
            >
            <a target="_blank" rel="noopener noreferrer" href="http://giclubsiteensao.000webhostapp.com/espace_etudiant_gi/authentification.php">
              Visit dashboard
            </a>
            </Button>
        </Container>
      </div>
    );
  }
}

export default Examples;
