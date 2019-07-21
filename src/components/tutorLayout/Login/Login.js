import React, {Component} from "react";
import { MDBContainer, MDBFormInline, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { Link } from 'react-router-dom';
import BACK_ARROW from '../../../assets/icons/left-arrow.svg';
import { connect } from 'react-redux';

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    componentWillMount() {
        let user = localStorage.getItem("authUser");
        if(user) {
            this.props.history.push("/TutorDashboard");
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        let email = this.state.email;
        let password = this.state.password;

        if(email == "" || password == "") {
            alert("No empty field allowed!");
        } else {
            let tutors = this.props.tutors;
            tutors = tutors.filter( t => t.tEmail == email && t.tPassword == password );
            if(tutors.length > 0) {
                localStorage.clear();
                localStorage.setItem("authUser", JSON.stringify(tutors[0]));
                this.props.history.push("/TutorDashboard");
            } else {
                alert("Incorrect credentials!")
            }
        }
    }

    textChangeHandler = (name, event) => {
        this.setState({
            [name]: event.target.value
        })
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
                                    value={this.state.email}
                                    onChange={(event) => this.textChangeHandler("email", event)}
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group
                                    value={this.state.password}
                                    onChange={(event) => this.textChangeHandler("password", event)}
                                    type="password"
                                    validate
                                />

                            </div>
                        </div>
                        <div className="text-center py-4 mt-3">
                            <MDBBtn color="cyan" type="submit" onClick={this.submitHandler}>
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

const mapStateToProps = (store) => {
    return {
        tutors: store.tutorDataReducer.tutors
    }
}

export default connect(mapStateToProps)(Login);