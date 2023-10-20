
import React from "react";

import {
  Button,
  Container,
  Row,
  Col,
  Modal,
  UncontrolledCarousel
} from "reactstrap";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoModal: false,
      demoModal0: false,
      demoModal1: false,
      demoModal2: false,
      demoModal3: false,
      demoModal4: false,
      demoModal5: false,
      demoModal6: false,
      demoModal7: false,
      demoModal8: false,
      demoModal9: false,
      events: []
    };
  }

  refrechList(){
    fetch(process.env.REACT_APP_API+'Event/GetEvents')
    .then(response=>response.json())
    .then(data=>{
      this.setState({events:data})
    });
  }
  componentDidMount(){
    this.refrechList();
  }
  componentDidUpdate(){
    this.refrechList();
  }

  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };

  render() {
    const {events}=this.state;
    const ModalStateTable = [
      this.state.demoModal0,
      this.state.demoModal1,
      this.state.demoModal2,
      this.state.demoModal3,
      this.state.demoModal4,
      this.state.demoModal5,
      this.state.demoModal6,
      this.state.demoModal7,
      this.state.demoModal8,
      this.state.demoModal9,
    ];
    return (
      <section className=" section-lg section-javascript" id="section-events">
        <div>
          <img alt="..." className="path" src={require("assets/img/path5.png")} />
          <img alt="..."className="path path1"src={require("assets/img/path5.png")}/>
          <div>
            <Container>
              <div className="title" Style="margin-bottom:50px">
                <h1>Last Events</h1>
              </div>
              <div className="space-50"></div>

                {events.map((event,index) =>
                  index%2===0?
                  <Row key={event.EventId} className="justify-content-between align-items-center">
                    <Col className="mb-5 mb-lg-0" lg="5">
                      <h1 className="text-white font-weight-light">
                      {event.E_Title}
                      </h1>
                      <p className="text-white mt-4">
                      {event.E_Description}<br/>
                      </p>
                      <Button
                        className="mt-4"
                        color="info"
                        onClick={() => this.toggleModal("demoModal"+index)}
                      >
                        More Details
                      </Button>
                    </Col>
                    <Col lg="6">
                      <UncontrolledCarousel
                        items={event.EventFiles}
                        indicators={false}
                        autoPlay={true}
                      />
                    </Col>
                    <div className="space-100"></div>
                    {/* Sart Demo Modal */}
                    <Modal
                      isOpen={ModalStateTable[index]}
                      toggle={() => this.toggleModal("demoModal"+index)}
                    >
                      <div className="modal-header justify-content-center">
                        <button
                          className="close"
                          onClick={() => this.toggleModal("demoModal"+index)}
                        >
                          <i className="tim-icons icon-simple-remove" />
                        </button>
                        <h4 className="title title-up">{event.E_Title}</h4>
                      </div>
                      <div className="modal-body">
                        <p>
                        {event.E_Details}
                        </p>
                      </div>
                      <div className="modal-footer">
                        <Button
                          color="danger"
                          type="button"
                          onClick={() => this.toggleModal("demoModal"+index)}
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                    {/* End Demo Modal */}
                  </Row>
                  :
                  <Row key={event.EventId} className="justify-content-between align-items-center">
                    <Col lg="6">
                      <UncontrolledCarousel
                        items={event.EventFiles}
                        indicators={false}
                        autoPlay={true}
                      />
                    </Col>
                    <Col className="mb-5 mb-lg-0" lg="5">
                      <h1 className="text-white font-weight-light">
                      {event.E_Title}
                      </h1>
                      <p className="text-white mt-4">
                      {event.E_Description}<br/>
                      </p>
                      <Button
                        className="mt-4"
                        color="info"
                        onClick={() => this.toggleModal("demoModal"+index)}
                      >
                        More Details
                      </Button>
                    </Col>
                    <div className="space-100"></div>
                    {/* Sart Demo Modal */}
                    <Modal
                      isOpen={ModalStateTable[index]}
                      toggle={() => this.toggleModal("demoModal"+index)}
                    >
                      <div className="modal-header justify-content-center">
                        <button
                          className="close"
                          onClick={() => this.toggleModal("demoModal"+index)}
                        >
                          <i className="tim-icons icon-simple-remove" />
                        </button>
                        <h4 className="title title-up">{event.E_Title}</h4>
                      </div>
                      <div className="modal-body">
                        <p>
                        {event.E_Details}
                        </p>
                      </div>
                      <div className="modal-footer">
                        <Button
                          color="danger"
                          type="button"
                          onClick={() => this.toggleModal("demoModal"+index)}
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                    {/* End Demo Modal */}
                  </Row>
                )}
            </Container>
          </div>
        </div>
      </section>
    );
  }
}

export default Events;
