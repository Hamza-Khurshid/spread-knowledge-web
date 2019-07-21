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
        let user = localStorage.getItem("authStudent");
        if(user) {
            this.props.history.push("/StudentDashboard");
        }
    }

    onTextChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginHandler = (e) => {
        e.preventDefault();

        let email = this.state.email;
        let password = this.state.password;

        if(email === "" || password === "") {
            alert("No empty field allowed!");
        } else {
            let students = this.props.students;
            students = students.filter( t => t.email == email && t.password == password );
            if(students.length > 0) {
                localStorage.clear();
                localStorage.setItem("authStudent", JSON.stringify(students[0]));
                this.props.history.push("/StudentDashboard");
            } else {
                alert("Incorrect credentials!")
            }
        }
    }


    render() {
        return (
            <MDBContainer>
            <MDBRow>
                <MDBCol md="6" className="align-middle" style={{padding: "auto", margin: "auto", marginTop: "5.5vw"}}>
                <MDBCard>
                    <MDBCardBody>
                    <form onSubmit={(event) => this.loginHandler(event)}>
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
                                    name='email'
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={(event) => this.onTextChange(event)}
                                />
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    name='password'
                                    group
                                    type="password"
                                    validate
                                    onChange={(event) => this.onTextChange(event)}
                                />

                            </div>
                        </div>
                        <div className="text-center py-4 mt-3">
                            <MDBBtn color="cyan" type="submit">
                                Login
                            </MDBBtn>
                            <div style={{marginTop: 10, cursor: 'pointer'}}>
                                <Link to="/StudentSignup">Not member? Signup!</Link>
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

const mapStateToProps = (state) => {
    return {
        students: state.studentDataReducer.students
    }
}

export default connect(mapStateToProps)(Login);