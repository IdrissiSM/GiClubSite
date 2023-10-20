import React from "react";
// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

class Features extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <section className=" section-lg" id="section-features">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <h1 className="text-center">Features</h1>
                    <Row className="row-grid justify-content-center">
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-primary">
                            <i className="tim-icons icon-money-coins" />
                          </div>
                          <h4 className="info-title">Team spirit</h4>
                          <hr className="line-primary" />
                          <p>
                          When you're part of this club it here where start the feeling of pride and loyalty of belonging,
                          we learn, share experiences, moments of joy, and create memories Together ..
                          </p>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-warning">
                            <i className="tim-icons icon-chart-pie-36" />
                          </div>
                          <h4 className="info-title">One goal</h4>
                          <hr className="line-warning" />
                          <p>
                          Neat and efficient work requires a clear objective and ours 
                          is to share our knowledge with others with all possible methods.
                          </p>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-success">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <h4 className="info-title">Passion</h4>
                          <hr className="line-success" />
                          <p>
                          To reach your goal, you have to find the why and ours is the passion, 
                          as computer engineering students there is one passion that brings us together, 
                          join us to discover it..
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Features;
