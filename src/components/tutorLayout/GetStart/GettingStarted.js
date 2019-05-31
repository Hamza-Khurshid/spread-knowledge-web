import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import { CITIES } from '../../../constants/Constants';
import { withRouter } from 'react-router-dom';

class TutorGetStart extends React.Component {

  state = {
    formActivePanel1: 1,
    formActivePanel1Changed: false,
  }

  swapFormActive = (a) => (param) => (e) => {
    this.setState({
      ['formActivePanel' + a]: param,
      ['formActivePanel' + a + 'Changed']: true
    });
  }

  handleNextPrevClick = (a) => (param) => (e) => {
    this.setState({
      ['formActivePanel' + a]: param,
      ['formActivePanel' + a + 'Changed']: true
    });
  }

  handleSubmission = () => {
    alert('Form submitted!');
    this.props.history.push('/TutorDashboard')
  }

  calculateAutofocus = (a) => {
    if (this.state['formActivePanel' + a + 'Changed']) {
      return true
    }
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol xl="6" lg="7" md="10" style={{ margin: 'auto' }}>
            <MDBCard>
              <MDBCardBody>
                <h2 className="text-center font-weight-bold pt-4 pb-5">
                  <strong>Let's just get started!</strong>
                </h2>
                <MDBRow>
                  <MDBCol>
                    <a href="#formstep1" onClick={this.swapFormActive(1)(1)}>
                      <MDBBtn color={this.state.formActivePanel1 === 1 ? "indigo" : "default"} circle>
                        1
                            </MDBBtn>
                    </a>
                    <p>Contact Information</p>
                  </MDBCol>
                  <MDBCol>
                    <a href="#formstep2" onClick={this.swapFormActive(1)(2)}>
                      <MDBBtn color={this.state.formActivePanel1 === 2 ? "indigo" : "default"} circle>
                        2
                            </MDBBtn>
                    </a>
                    <p>Qualification</p>
                  </MDBCol>
                  <MDBCol>
                    <a href="#formstep3" onClick={this.swapFormActive(1)(3)}>
                      <MDBBtn color={this.state.formActivePanel1 === 3 ? "indigo" : "default"} circle>
                        3
                            </MDBBtn>
                    </a>
                    <p>What to teach</p>
                  </MDBCol>
                </MDBRow>

                <form action="" method="post">
                  <MDBRow>
                    {this.state.formActivePanel1 === 1 && (
                      <MDBCol md="12">
                        <h3 className="font-weight-bold pl-0 my-4">
                          <strong>Contact Information</strong>
                        </h3>
                        <div style={{ textAlign: 'left', marginLeft: 30, marginRight: 30, justifyContent: 'center', alignItems: 'center' }}>
                          <div>
                            <span style={{ marginRight: 15 }}>Select City: </span>
                            <select class="mdb-select md-form" style={{ zoom: 1.3, border: 'none', padding: 3 }}>
                              <option value="" disabled selected>Choose your city</option>
                              {CITIES.map(item => {
                                return (
                                  <option value={item}>{item}</option>
                                )
                              })
                              }
                            </select>
                          </div>

                          <MDBInput
                            label="Address"
                            icon="map-marker-alt"
                            autoFocus={this.calculateAutofocus(1)}
                            value={this.state.username}
                            onChange={(event) => this.onTextChange("username", event)}
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                          />
                          <MDBInput
                            label="Contact Number"
                            icon="phone"
                            value={this.state.username}
                            onChange={(event) => this.onTextChange("username", event)}
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                          />
                        </div>
                        <MDBBtn color="indigo" rounded className="float-right" onClick={this.handleNextPrevClick(1)(2)}>
                          next
                    </MDBBtn>
                      </MDBCol>
                    )}
                    {this.state.formActivePanel1 === 2 && (
                      <MDBCol md="12">
                        <h3 className="font-weight-bold pl-0 my-4">
                          <strong>Qualification</strong>
                        </h3>
                        <div style={{ textAlign: 'left', marginLeft: 30, marginRight: 30, justifyContent: 'center', alignItems: 'center' }}>
                          <div>
                            <span style={{ marginRight: 15 }}>Select Degree: </span>
                            <select class="mdb-select md-form" style={{ zoom: 1.3, border: 'none', padding: 3 }}>
                              <option value="" disabled selected>Choose your degree level</option>
                              <option value="Primary">Primary</option>
                              <option value="Middle">Middle</option>
                              <option value="Matric">Matric</option>
                              <option value="Intermediate">Intermediate</option>
                              <option value="Becholars">Becholars</option>
                              <option value="Masters">Masters</option>
                              <option value="Doctoral">Doctoral</option>
                            </select>
                          </div>

                          <MDBInput
                            label="Degree Title i.e. Software Engineering"
                            icon="graduation-cap"
                            value={this.state.username}
                            onChange={(event) => this.onTextChange("username", event)}
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                          />
                          <div>
                            <span style={{ marginRight: 15 }}>Experience Degree: </span>
                            <select class="mdb-select md-form" style={{ zoom: 1.3, border: 'none', padding: 3 }}>
                              <option value="" disabled selected>Choose degree level</option>
                              <option value="Primary">Primary</option>
                              <option value="Middle">Middle</option>
                              <option value="Matric">Matric</option>
                              <option value="Intermediate">Intermediate</option>
                              <option value="Becholars">Becholars</option>
                              <option value="Masters">Masters</option>
                              <option value="Doctoral">Doctoral</option>
                            </select>
                          </div>

                          <MDBInput
                            label="Degree Title i.e. Software Engineering"
                            icon="graduation-cap"
                            value={this.state.username}
                            onChange={(event) => this.onTextChange("username", event)}
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                          />
                        </div>
                        <MDBBtn color="indigo" rounded className="float-left" onClick={this.handleNextPrevClick(1)(1)}>
                          previous
                    </MDBBtn>
                        <MDBBtn color="indigo" rounded className="float-right" onClick={this.handleNextPrevClick(1)(3)}>
                          next
                    </MDBBtn>
                      </MDBCol>
                    )}
                    {this.state.formActivePanel1 === 3 && (
                      <MDBCol md="12">
                        <h3 className="font-weight-bold pl-0 my-4">
                          <strong>What to teach</strong>
                        </h3>
                        <div style={{ textAlign: 'left', marginLeft: 30, marginRight: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <span style={{ marginRight: 15 }}>Select Degree: </span>
                            <select class="mdb-select md-form" style={{ zoom: 1.3, border: 'none', padding: 3 }}>
                              <option value="" disabled selected>Choose degree level</option>
                              <option value="Primary">Primary</option>
                              <option value="Middle">Middle</option>
                              <option value="Matric">Matric</option>
                              <option value="Intermediate">Intermediate</option>
                              <option value="Becholars">Becholars</option>
                              <option value="Masters">Masters</option>
                              <option value="Doctoral">Doctoral</option>
                            </select>
                          </div>

                          <MDBInput
                            label="Degree Title i.e. F.Sc (Pre Engineering)"
                            icon="certificate"
                            value={this.state.username}
                            onChange={(event) => this.onTextChange("username", event)}
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                          />

                          <div style={{display: 'flex', flexDirection: 'row'}}>
                            <MDBInput
                              label="Subject 1"
                              icon="book"
                              value={this.state.username}
                              onChange={(event) => this.onTextChange("username", event)}
                              group
                              type="text"
                              validate
                              error="wrong"
                              success="right"
                            />
                            <MDBInput
                              label="Subject 2"
                              icon="book"
                              value={this.state.username}
                              onChange={(event) => this.onTextChange("username", event)}
                              group
                              type="text"
                              validate
                              error="wrong"
                              success="right"
                            />
                            <MDBInput
                              label="Subject 3"
                              icon="book"
                              value={this.state.username}
                              onChange={(event) => this.onTextChange("username", event)}
                              group
                              type="text"
                              validate
                              error="wrong"
                              success="right"
                            />
                          </div>  
                        </div>
                        <MDBBtn color="indigo" rounded className="float-left" onClick={this.handleNextPrevClick(1)(2)}
                          autoFocus={this.calculateAutofocus(1)}>
                          previous
                    </MDBBtn>
                        <MDBBtn color="default" rounded className="float-right" onClick={this.handleSubmission}>
                          submit
                    </MDBBtn>
                      </MDBCol>
                    )}
                  </MDBRow>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };
}

export default withRouter(TutorGetStart);