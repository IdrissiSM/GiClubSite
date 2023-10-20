import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Modal,
  UncontrolledAlert
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

let ps = null;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1,
      miniModal: false,

      currentMember: {},
      OldPassword: '',
      NewPassword: '',
      NewPasswordConfirm: '',
      changePasswordMessage: '',

      cellTasksToDo: [],
      cellTasksDone: []

      // taskTitle : '',
      // taskDecription: '',
      // taskCell: '',
      // AddTaskMessage: ''
    };
    this.OldPassword = this.OldPassword.bind(this);
    this.NewPassword = this.NewPassword.bind(this);
    this.NewPasswordConfirm = this.NewPasswordConfirm.bind(this);

    // this.taskTitle = this.taskTitle.bind(this);
    // this.taskDecription = this.taskDecription.bind(this);
    // this.taskCell = this.taskCell.bind(this);
  }
  // Add task -------------------------------------------
  // taskTitle(event) {
  //   this.setState({ taskTitle: event.target.value })
  // }
  // taskDecription(event) {
  //   this.setState({ taskDecription: event.target.value })
  // }
  // taskCell(event) {
  //   this.setState({ taskCell: event.target.value })
  // }
  // AddCellTask() {
  //   if(this.state.taskTitle==='' 
  //   || this.state.taskDecription===''
  //   || this.state.taskCell===''){
  //     this.AddTaskMessage = "To add a task please check that all form fields are inserted !";
  //     this.toggleModal("miniModal");
  //   }else{
  //     fetch(process.env.REACT_APP_API+'Task/AddCellTask', {
  //       method: 'post',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         Title: this.state.taskTitle,
  //         Description: this.state.taskDecription,
  //         Cell: this.state.taskCell
  //       })
  //     }).then((result) => {
  //         this.AddTaskMessage = "The task has been added successfully !";
  //         this.toggleModal("miniModal");
  //       })
  //   }
  // }

  // change password ------------------------------------
  OldPassword(event) {
    this.setState({ OldPassword: event.target.value })
  }
  NewPassword(event) {
    this.setState({ NewPassword: event.target.value })
  }
  NewPasswordConfirm(event) {
    this.setState({ NewPasswordConfirm: event.target.value })
  }

  isStrongPassword(password) {
    var regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    var isValidPassword = (regExp.test(password));
    return isValidPassword;
    
  }

  changePassword() {
    if(!(this.state.OldPassword === "")){
      if(this.state.NewPassword === this.state.NewPasswordConfirm && !(this.state.NewPassword === "")){
        if(!(this.state.OldPassword === this.state.NewPassword)){
          if(this.isStrongPassword(this.state.NewPassword)){
            fetch(process.env.REACT_APP_API+'Member/ChangePassword', {
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                Id: this.currentMember.Id,
                NewPassword: this.state.NewPassword,
                OldPassword: this.state.OldPassword
              })
            }).then((Response) => Response.json())
              .then(async (result) => {
                if(result){
                  if(result.IsOldPasswordCorrect){
                    if(result.IschagedPassword){
                      this.changePasswordMessage = "Your Password have been changed successfully !";
                    }
                    else{
                      this.changePasswordMessage = "An error has occured please try again later !";
                    }
                  }else{
                    this.changePasswordMessage = "The old password is incorrect !";
                  }
                  this.toggleModal('miniModal');
                }
              })
          }else{
            this.changePasswordMessage = "The new password must contain at least 8 characters, an uppercase letter, a lowercase letter, a number, a special character !";
            this.toggleModal('miniModal');
          }
        }else{
          this.changePasswordMessage = "The old password and the new one are the same";
          this.toggleModal('miniModal');
        }
      }else{
        this.changePasswordMessage = "Password confirmation do not match";
        this.toggleModal('miniModal');
      }
    }else{
      this.changePasswordMessage = "You must Insert the old password first";
      this.toggleModal('miniModal');
    }
  }

  getCellTasks(taskStatus){
    var localStorageCurrentMember = localStorage.getItem('currentMember');
    this.currentMember = JSON.parse(localStorageCurrentMember);
    
    fetch(process.env.REACT_APP_API+'Task/GetCellTasks', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Cell: this.currentMember.Cellule,
        Status : taskStatus
      })
    })
    .then(response=>response.json())
    .then(data=>{
      if(taskStatus === "completed"){
        this.setState({cellTasksDone:data});
      }
      else if(taskStatus === "not completed"){
        this.setState({cellTasksToDo:data});
      }
    });
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

  sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };

  async componentDidMount() {
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
    var localStorageCurrentMember = localStorage.getItem('currentMember');
    this.currentMember = JSON.parse(localStorageCurrentMember);
    this.getCellTasks("not completed");
    this.getCellTasks("completed");
    const {cellTasksToDo}=this.state;
    const {cellTasksDone}=this.state;
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
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
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">Formation Cell</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description">
                    The purpose of the Computer Science Club is to create a space for students to connect 
                    and grow their technical and soft skills outside of the classroom. Also to make interested students 
                    in touch on our social media to share a lot of useful concepts.
                  </p>
                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href=""
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      href=""
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Like us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="dribbble"
                      href=""
                      id="tooltip951161185"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Follow us
                    </UncontrolledTooltip>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/profil-photo.jpg")}
                      />
                      <h4 className="title">{this.currentMember.FirstName +" "+this.currentMember.LastName}</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-info justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 1)}
                            href="#pablo"
                          >
                            About
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 2
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 2)}
                            href="#pablo"
                          >
                            Password
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId="tab1">
                          <Table className="tablesorter" responsive><tbody>
                              <tr>
                                <td className="">FirstName</td>
                                <td>{this.currentMember.FirstName}</td>
                              </tr>
                              <tr>
                                <td className="">LastName</td>
                                <td>{this.currentMember.LastName}</td>
                              </tr>
                              <tr>
                                <td className="">Cell</td>
                                <td>{this.currentMember.Cellule}</td>
                              </tr>
                              <tr>
                                <td className="">Role</td>
                                <td>{this.currentMember.Role}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab2">
                          <Row>
                            <Label sm="4">The Old Password</Label>
                            <Col sm="8">
                              <FormGroup>
                                <Input
                                  placeholder="*****************"
                                  type="password"
                                  onChange={this.OldPassword}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Label sm="4">The New Password</Label>
                            <Col sm="8">
                              <FormGroup>
                                <Input
                                  placeholder="*****************"
                                  type="password"
                                  onChange={this.NewPassword}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Label sm="4">Confirm Password</Label>
                            <Col sm="8">
                              <FormGroup>
                                <Input 
                                  placeholder="*****************"
                                  type="password" 
                                  onChange={this.NewPasswordConfirm}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Button
                            className="btn-simple float-right"
                            color="info"
                            type="button"
                            onClick={() => this.changePassword()}
                          >
                            Change
                          </Button>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              {/* Start Mini Modal */}
              <Modal
                modalClassName=
                {
                  (this.changePasswordMessage === ("Your Password have been changed successfully !"))?
                  "modal-mini modal-success modal-mini"
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
                    <i className="tim-icons icon-single-02" />
                  </div>
                </div>
                <div className="modal-body">
                  <p>{this.changePasswordMessage}</p>
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
            </Container>
          </div>
          {
          // <div id="Tasks">
          //   {/* cell tasks to do */}
          //   <div className="section-notifications" id="tasks-to-do">
          //     <Container>
          //       <div className="space" />
          //       <h3>Cell Tasks To Do</h3>
          //       {
          //         cellTasksToDo.map((task,index) => 
          //           <div className="task" key={task.TaskId}>
          //             <UncontrolledAlert 
          //             className="alert-with-icon" 
          //             color={task.Notification}
          //             >
          //               <span 
          //               data-notify="icon" 
          //               className= {
          //                 task.Notification === "info" ?
          //                   "tim-icons icon-bell-55" 
          //                   :
          //                   task.Notification === "warning" ?
          //                     "tim-icons icon-bulb-63"
          //                     :
          //                     "tim-icons icon-support-17"
          //               }
          //               />
          //               <span>
          //                 <span className="mr-50" >
          //                   <b>{task.Notification}</b>
          //                   {" : "+task.Status+" !"}
          //                 </span>
          //                 <div className="text-center">
          //                   <h4><b>{task.Title}</b></h4>
          //                 </div>
          //                 {task.Description}
          //                 <div className="mr-0">
          //                   <br/>
          //                   Created at : 
          //                   {" "+new Date(task.CreatedAt).toUTCString()}
          //                 </div>
          //               </span>
          //             </UncontrolledAlert>
          //           </div>
          //         )
          //       }
          //     </Container>
          //   </div>
          //   {/* cell tasks done */}
          //   <div className="section-notifications" id="tasks-done">
          //     <Container>
          //       <div className="space-50" />
          //       <h3>Cell Tasks Done</h3>
          //       {
          //         cellTasksDone.map((task,index) => 
          //           <div className="task" key={task.TaskId}>
          //             <UncontrolledAlert 
          //             className="alert-with-icon" 
          //             color="success"
          //             >
          //               <span 
          //               data-notify="icon" 
          //               className= "tim-icons icon-shape-star"
          //               />
          //               <span>
          //                 <span className="mr-50" >
          //                   <b>success</b>
          //                   {" : "+task.Status+" !"}
          //                 </span>
          //                 <div className="text-center">
          //                   <h4><b>{task.Title}</b></h4>
          //                 </div>
          //                 {task.Description}
          //                 <div className="mr-0">
          //                   <br/>
          //                   Created at : 
          //                   {" "+new Date(task.CreatedAt).toUTCString()}
          //                 </div>
          //               </span>
          //             </UncontrolledAlert>
          //           </div>
          //         )
          //       }
          //     </Container>
          //   </div>
          // </div>
          }
          <div className="space-50"></div>
          <Footer />
        </div>
      </>
    );
  }
}

export default ProfilePage;
