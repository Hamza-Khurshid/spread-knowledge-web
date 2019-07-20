import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { MDBContainer, MDBFormInline, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import BACK_ARROW from '../../../assets/icons/left-arrow.svg';
import { CITIES } from '../../../constants/Constants';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStudent } from '../../../redux/actions/StudentDataAction';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class GetStarted extends Component {
    state= {
        city: '',
        address: '',
        subject1: '',
        subject2: '',
        subject3: ''
    }

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        })
    }

    onTextChange = (name, event) => {
        this.setState({
            [name]: event.target.value
        })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    signUpHandler = (e) => {
        e.preventDefault();

        let { id, name, email, password, gender } = this.props.location.state.student;
        let { city, address, subject1, subject2, subject3 } = this.state;

        let allEmpty = false;
        if(subject1==='') {
            if(subject2===''){
                if(subject3==='') {
                    allEmpty = true;
                }
            }
        }

        if(allEmpty) {
            alert('You need to enter at least one subject!')
        } else {
            if(city==='' || address==='') {
                alert('No empty field allowed!')
            } else {
    
                let student  = {
                    id,
                    name,
                    email,
                    password,
                    gender,
                    city,
                    address,
                    subject1,
                    subject2,
                    subject3,
                }
                
                localStorage.clear();
                localStorage.setItem('authStudent', JSON.stringify(student));
                this.props.addStudent(student);

            }
        }

    }

    render() {

        return (
            <MDBContainer>
            <MDBRow>
                <MDBCol md="6" style={{padding: 10, margin: "auto"}}>
                <MDBCard>
                    <MDBCardBody>
                    <form onSubmit={(event) => this.signUpHandler(event)}>
                        <div className="text-left"> 
                            <Link to="/StudentSignup"> 
                                <img src={BACK_ARROW} alt="Back" style={{height: 20, width: 25, marginLeft: 40, cursor: 'pointer'}}/> 
                            </Link> 
                        </div>
                        <p className="h4 text-center py-4">Get Started</p>
                        <div className="grey-text" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{textAlign: 'left'}}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel
                                        ref={ref => {
                                            this.InputLabelRef = ref;
                                        }}
                                        htmlFor="outlined-age-simple"
                                    >
                                        City
                                    </InputLabel>
                                    <Select
                                        value={this.state.city}
                                        onChange={this.handleChange}
                                        style={{textAlign: 'left'}}
                                        input={
                                            <OutlinedInput
                                                labelWidth={this.state.labelWidth}
                                                name="city"
                                                id="outlined-age-simple"
                                            />
                                        }
                                    >
                                        { CITIES.map( cty => (
                                            <MenuItem value={cty}>{cty}</MenuItem>
                                        )) }
                                    </Select>
                                </FormControl>
                                <MDBInput
                                    label="Your address"
                                    icon="user"
                                    value={this.state.address}
                                    onChange={(event) => this.onTextChange("address", event)}
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Subject 1 to study"
                                    icon="book"
                                    value={this.state.subject1}
                                    onChange={(event) => this.onTextChange("subject1", event)}
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Subject 2 to study"
                                    icon="book"
                                    value={this.state.subject2}
                                    onChange={(event) => this.onTextChange("subject2", event)}
                                    group
                                    type="text"
                                    validate
                                />
                                <MDBInput
                                    label="Subject 3 to study"
                                    icon="book"
                                    value={this.state.subject3}
                                    onChange={(event) => this.onTextChange("subject3", event)}
                                    group
                                    type="text"
                                    validate
                                />
                                <div>
                                    * At least one subject is compulsory.
                                </div>
                            </div>
                        </div>
                        <div className="text-center py-4 mt-3">
                            <MDBBtn color="cyan" type="submit">
                                Get Start
                            </MDBBtn>
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

export default connect(null, { addStudent })(GetStarted);