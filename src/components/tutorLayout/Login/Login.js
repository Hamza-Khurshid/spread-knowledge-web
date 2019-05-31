import React, {Component} from "react";
import { MDBContainer, MDBFormInline, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { Link } from 'react-router-dom';
import BACK_ARROW from '../../../assets/icons/left-arrow.svg';

class Login extends Component {
    state = {
        email: '',
        password: '',
    }


    render() {
        return (
            <MDBContainer>
            <MDBRow>
                <MDBCol md="6" className="align-middle" style={{padding: "auto", margin: "auto", marginTop: "5.5vw"}}>
                <MDBCard>
                    <MDBCardBody>
                    <form>
                        <div className="text-left"> 
                            <Link to="/"> 
                                <img src={BACK_ARROW} alt="Back" style={{height: 20, width: 25, marginLeft: 40, cursor: 'pointer'}}/> 
                            </Link> 
                        </div>
                        <p className="h4 text-center py-4">Login</p>
                        <div className="grey-text" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{textAlign: 'left'}}>
                                
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                />

                            </div>
                        </div>
                        <div className="text-center py-4 mt-3">
                            <MDBBtn color="cyan" type="submit">
                                Login
                            </MDBBtn>
                            <div style={{marginTop: 10, cursor: 'pointer'}}>
                                <Link to="/TutorSignup">Not member? Signup!</Link>
                            </div>
                        </div>
                    </form>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        );
    }
};

export default Login;