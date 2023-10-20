import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Container,
  UncontrolledTooltip,
  Modal
} from "reactstrap";

class Download extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      miniModal: false,

      Name: '',
      Email: '',
      Phone: '',
      University: '',
      Message: ''
    };

    this.Name = this.Name.bind(this);
    this.Email = this.Email.bind(this);
    this.Phone = this.Phone.bind(this);
    this.University = this.University.bind(this);
    this.Message = this.Message.bind(this);
  }

  Name(event) {
    this.setState({ Name: event.target.value })
  }
  Email(event) {
    this.setState({ Email: event.target.value })
  }
  Phone(event) {
    this.setState({ Phone: event.target.value })
  }
  University(event) {
    this.setState({ University: event.target.value })
  }
  Message(event) {
    this.setState({ Message: event.target.value })
  }

  SendMessage() {
    if(this.state.Email==='' || this.state.Name==='' || this.state.Phone==='' || this.state.University==='' || this.state.Message===''){
      this.Message = "To send a message please check that all form fields are inserted !";
      this.toggleModal("miniModal");
    }else{
      fetch(process.env.REACT_APP_API+'ContactMail/AddContactMail', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.Name,
          email: this.state.Email,
          university: this.state.University,
          phone: this.state.Phone,
          message: this.state.Message
        })
      }).then((result) => {
          this.Message = "Thanks for your message !";
          this.toggleModal("miniModal");
        })
    }
  }

  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };

  render() {
    return (
      <>
        <div className="wrapper" id="contact-section">
          <section className="contact-section">
            <Container>
              <Row>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <h1 className="profile-title text-left">Contact</h1>
                      <h2 className="text-on-back">Mail</h2>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Your Name</label>
                              <Input 
                              placeholder="Name" 
                              type="text" 
                              onChange={this.Name}/>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Email address</label>
                              <Input
                                placeholder="mike@email.com"
                                type="email"
                                onChange={this.Email}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Phone</label>
                              <Input 
                              placeholder="+212-" 
                              type="text" 
                              onChange={this.Phone}/>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>University</label>
                              <Input 
                              type="text" 
                              onChange={this.University}/>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Message</label>
                              <Input
                              placeholder="Hello there!" 
                              type="text" 
                              onChange={this.Message}/>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-round float-right"
                          color="primary"
                          data-placement="right"
                          id="tooltip341148792"
                          type="button"
                          onClick={() => this.SendMessage()}
                        >
                          Send mail
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          placement="right"
                          target="tooltip341148792"
                        >
                          Can't wait for your message
                        </UncontrolledTooltip>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
                {/* Start Mini Modal */}
                <Modal
                  modalClassName=
                  {
                    (this.Message === ("Thanks for your message !"))?
                    "modal-mini modal-primary modal-mini"
                    :
                    "modal-mini modal-danger modal-mini"
                  }
                  isOpen={this.state.miniModal}
                  toggle={() => this.toggleModal("miniModal")}
                >
                  <div className="modal-header justify-content-center">
                    <button
                      className="close"
                      onClick={() => this.toggleModal("miniModal")}
                    >
                      <i className="tim-icons icon-simple-remove text-white" />
                    </button>
                    <div className="modal-profile">
                      <i className="tim-icons icon-email-85" />
                    </div>
                  </div>
                  <div className="modal-body">
                    <p>{this.Message}</p>
                  </div>
                  <div className="modal-footer">
                    <Button className="btn-neutral" color="link" type="button">
                      Back
                    </Button>
                    <Button
                      className="btn-neutral"
                      color="link"
                      onClick={() => this.toggleModal("miniModal")}
                      type="button"
                    >
                      Close
                    </Button>
                  </div>
                </Modal>
                {/* End Mini Modal */}
                <Col className="ml-auto" md="4">
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-square-pin" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Find us</h4>
                      <p>
                        Université Mohammed Premier<br />
                        ENSA Oujda
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p>
                        General Secretary<br />
                        +2126-00000000 <br />
                        Mon - Fri, 10:00-18:00
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Download;
