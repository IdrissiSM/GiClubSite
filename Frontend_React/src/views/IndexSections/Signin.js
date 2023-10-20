import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  Modal,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledAlert
} from "reactstrap";

class Signup extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
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
          this.LoginMessage = 'Invalid Email ! Please try again.'
          this.toggleNotification('isLoginMessage');
        }
        else if(result.IsEmailExist && !result.IsValidPassword){
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

  toggleNotification = async modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
    await this.sleep(3000);
    this.setState({
      [modalState]: false
    });
  };

  render() {
    return (
      <div className="section section-signin" id="section-signin">
        <Container>
          <div className="squares square-1" />
          <div className="squares square-2" />
          <div className="squares square-3" />
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className="display-3 text-white">
                You can sign in as a member{" "}
                <span className="text-white">Welcome to your club !</span>
              </h3>
              <p className="text-white mb-3">
                The authentification to your account gives you permission to access all fonctionalities,
                which you cannot have access into as a simple vistor.
              </p>
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <Card className="card-register">
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("assets/img/square-purple-1.png")}
                  />
                  <CardTitle tag="h4" Style="margin-left:0px;">Sign In</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form">
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
                    <InputGroup
                      className={classnames({
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
                        type="text"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                        onChange={this.Email}
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.passwordFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
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
                    <FormGroup check className="text-left">
                      <Label check>
                        <Input type="checkbox" />
                        <span className="form-check-sign" />
                        Remember me !
                      </Label>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button 
                    className="btn-round" 
                    color="primary" 
                    size="lg"
                    onClick={this.login}
                    >
                    Sign in 
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            {/* Sart Demo Modal */}
            <Modal
              isOpen={this.state.demoModal}
              toggle={() => this.toggleModal("demoModal")}
            >
              <div className="modal-header justify-content-center">
                <button
                  className="close"
                  onClick={() => this.toggleModal("demoModal")}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
                <h4 className="title title-up">Modal title</h4>
              </div>
              <div className="modal-body">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted
                  parts of sentences fly into your mouth.
                </p>
              </div>
              <div className="modal-footer">
                <Button color="default" type="button">
                  Nice Button
                </Button>
                <Button
                  color="danger"
                  type="button"
                  onClick={() => this.toggleModal("demoModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
            {/* End Demo Modal */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Signup;
