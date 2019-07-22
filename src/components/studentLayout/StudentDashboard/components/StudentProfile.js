import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { MDBCard, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBBtn, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";

import { makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import SearchAppBar from './AppBar';
import TutorsList from "./SuggestedTutors";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CITIES } from '../../../../constants/Constants';
import { addTuitionRequest } from '../../../../redux/actions/TuitionRequestAction';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import moment from "moment";


class StudentProfile extends Component {
    state = {
        searchQuery: '',
        tutors: [],
        loader: false,
        open: false,

        trClass: '',
        trSubject: '',
        trDegreeL: '',
        trDegreeT: '',
        trCity: '',
        trAddress: '',
        timeFrom: '',
        timeTo: '',

        labelWidth: 0
    }

    // componentDidMount() {
    //     this.setState({
    //         labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    //     })
    // }

    sendProposalHandler = () => {
        let tutor = localStorage.getItem('authUser');
        if(tutor) {
            tutor = JSON.parse(tutor);
            this.handleClickOpen();
        } else {
            alert('First login as tutor!');
        }
    }

    guidGenerator = () => {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
    handleClose = () => {
    this.setState({ open: false });
    };

    handleSend = () => {
        let { trClass, trSubject, trDegreeT, trDegreeL, trCity, trAddress, timeFrom, timeTo } = this.state;
        if(trClass === '' || trSubject === '' || trDegreeL === '' || trDegreeT === '' || trCity === '' || trAddress === '' || timeFrom === '' || timeTo === '') {
            alert('All fields are required!')
        } else {
            let student = localStorage.getItem('authStudent');
            student = JSON.parse(student);

            let tuitionRequest = {
                _id: this.guidGenerator(),
                trSenderId: student._id,
                trPostedAt: moment().format('DD-MMM-YYYY'),
                trClass,
                trSubject,
                trDegreeL,
                trDegreeT,
                trCity,
                trAddress,
                timeFrom,
                timeTo
            }
            this.props.addTuitionRequest(tuitionRequest);
            this.setState({ open: false, trClass: '', trSubject: '', trDegreeT: '', trDegreeL: '', trCity: '', trAddress: '', timeFrom: '', timeTo: ''});
        }
    }

    textChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.tutors) {
            this.setState({
                tutors: nextProps.tutors,
                loader: false
            })
        }
    }

    searchingForName = searchQuery => {
        return function(tutor) {
            return (
                tutor.tName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tutor.tCity.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tutor.tDegreeT.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tutor.tDegreeL.toLowerCase().includes(searchQuery.toLowerCase()) || !searchQuery
            )
        };
    };
    
    render() {
        let student = localStorage.getItem("authStudent");
        student = JSON.parse(student);
        let tuts = this.props.tutors;
        tuts = tuts.filter( t => (t.subject1 === student.subject1) || (t.subject1 === student.subject2) || (t.subject1 === student.subject3) ||
        (t.subject2 === student.subject1) || (t.subject2 === student.subject2) || (t.subject2 === student.subject3) ||
        (t.subject3 === student.subject1) || (t.subject3 === student.subject2) || (t.subject3 === student.subject3) )

        return (
            <MDBContainer>
                <MDBRow>
                    
                    <MDBCol md="12" style={{ padding: 10 }}>
                        <div className="card">
                            <div className="card-header" style={{ backgroundColor: 'rgba(24, 59, 78, 0.7)', color: 'white' }}>
                                Profile Information
                            </div>

                            <div className="card-body" style={{ marginTop: 23 }}>
                                <div style={styles.root}>
                                    <Table style={styles.table}>
                                        <TableBody>
                                            <TableRow key={1}>
                                                <TableCell align="left">
                                                    <b>Name</b>
                                                </TableCell>
                                                <TableCell align="left">{student.name}</TableCell>
                                            </TableRow>
                                            <TableRow key={2}>
                                                <TableCell align="left">
                                                    <b>Subjects</b>
                                                </TableCell>
                                                <TableCell align="left">{student.subject1 +", "+ student.subject2+ ", "+ student.subject3}</TableCell>
                                            </TableRow>
                                            <TableRow key={3}>
                                                <TableCell>
                                                    <b>Class</b>
                                                </TableCell>
                                                <TableCell align="left">{student.sClass}</TableCell>
                                            </TableRow>
                                            <TableRow key={4}>
                                                <TableCell>
                                                    <b>Contact</b>
                                                </TableCell>
                                                <TableCell align="left">{ student.email }</TableCell>
                                            </TableRow>
                                            <TableRow key={6}>
                                                <TableCell>
                                                    <b>Gender</b>
                                                </TableCell>
                                                <TableCell align="left">{ student.gender == "male" ? "Male" : "Female"}</TableCell>
                                            </TableRow>
                                            <TableRow key={7}>
                                                <TableCell>
                                                    <b>Address</b>
                                                </TableCell>
                                                <TableCell align="left">{student.city + ', ' + student.address}</TableCell>
                                            </TableRow>
                                            
                                            <TableRow>
                                                <TableCell align='right'>
                                                    <Link to={{
                                                            pathname: `/EditStudentProfile/${student._id}`,
                                                            query: {
                                                                student
                                                            }
                                                        }} >
                                                        <MDBBtn style={{marginTop: 25, backgroundColor: '#183b4e', color: 'white'}} color="#183b4e" size="md">
                                                            Edit Profile
                                                        </MDBBtn>
                                                    </Link>
                                                </TableCell>

                                                <TableCell align='center'>
                                                    <MDBBtn onClick={this.handleClickOpen} style={{marginTop: 25, backgroundColor: '#183b4e', color: 'white'}} color="#183b4e" size="md">
                                                        Request Tuition
                                                    </MDBBtn>
                                                </TableCell>
                                            </TableRow>
                                            
                                        </TableBody>
                                    </Table>
                                    <div>
                                        <Dialog
                                            open={this.state.open}
                                            onClose={this.handleClose}
                                            aria-labelledby="form-dialog-title"
                                        >
                                            <DialogTitle id="form-dialog-title">Tuition Request</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    To request a tuition, please enter your requirments briefly
                                                    that specify your need.
                                            </DialogContentText>
                                                <TextField
                                                    margin="dense"
                                                    name="trClass"
                                                    label="Enter Class"
                                                    type="number"
                                                    fullWidth
                                                    onChange={(event) => this.textChangeHandler(event)}
                                                    variant='outlined'
                                                />

                                                <FormControl fullWidth variant="outlined" style={{ minWidth: 120}}>
                                                    <InputLabel
                                                        ref={ref => {
                                                            this.InputLabelRef = ref;
                                                        }}
                                                        htmlFor="outlined-age-simple"
                                                    >
                                                        Degree Level
                                                    </InputLabel>
                                                    <Select
                                                        value={this.state.trDegreeL}
                                                        onChange={this.textChangeHandler}
                                                        style={{textAlign: 'left'}}
                                                        input={
                                                            <OutlinedInput
                                                                labelWidth={this.state.labelWidth}
                                                                name="trDegreeL"
                                                                id="outlined-age-simple"
                                                            />
                                                        }
                                                    >
                                                        <MenuItem value="Matric">Matric</MenuItem>
                                                        <MenuItem value="Intermediate">Intermediate</MenuItem>
                                                        <MenuItem value="Bechalors">Bechalors</MenuItem>
                                                        <MenuItem value="Masters">Masters</MenuItem>
                                                        <MenuItem value="Doctorial">Doctorial</MenuItem>
                                                    </Select>
                                                </FormControl>

                                                <TextField
                                                    margin="dense"
                                                    name="trDegreeT"
                                                    label="Enter Degree Title i.e. Software Engineering"
                                                    type="text"
                                                    onChange={(event) => this.textChangeHandler(event)}
                                                    fullWidth
                                                    variant='outlined'
                                                />
                                                <TextField
                                                    margin="dense"
                                                    name="trSubject"
                                                    label="Enter Subject i.e. Mathematics"
                                                    type="text"
                                                    fullWidth
                                                    onChange={(event) => this.textChangeHandler(event)}
                                                    variant='outlined'
                                                />

                                                <FormControl fullWidth variant="outlined" style={{ minWidth: 120}}>
                                                    <InputLabel
                                                        ref={ref => {
                                                            this.InputLabelRef = ref;
                                                        }}
                                                        htmlFor="outlined-age-simple"
                                                    >
                                                        City
                                                    </InputLabel>
                                                    <Select
                                                        value={this.state.trCity}
                                                        onChange={this.textChangeHandler}
                                                        style={{textAlign: 'left'}}
                                                        input={
                                                            <OutlinedInput
                                                                labelWidth={this.state.labelWidth}
                                                                name="trCity"
                                                                id="outlined-age-simple"
                                                            />
                                                        }
                                                    >
                                                        { CITIES.map( cty => (
                                                            <MenuItem value={cty}>{cty}</MenuItem>
                                                        )) }
                                                    </Select>
                                                </FormControl>

                                                <TextField
                                                    margin="dense"
                                                    name="trAddress"
                                                    label="Enter Address"
                                                    type="text"
                                                    onChange={(event) => this.textChangeHandler(event)}
                                                    fullWidth
                                                    variant='outlined'
                                                />

                                                <TextField
                                                    margin="dense"
                                                    name="timeFrom"
                                                    label="Enter Time From i.e. 04:30 PM"
                                                    type="text"
                                                    onChange={(event) => this.textChangeHandler(event)}
                                                    fullWidth
                                                    variant='outlined'
                                                />

                                                <TextField
                                                    margin="dense"
                                                    name="timeTo"
                                                    label="Enter Time To i.e. 06:00 PM"
                                                    type="text"
                                                    onChange={(event) => this.textChangeHandler(event)}
                                                    fullWidth
                                                    variant='outlined'
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={this.handleClose} color="primary">
                                                    Cancel
                                                </Button>
                                                <Button onClick={this.handleSend} color="primary">
                                                    Request
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="12">
                        <SearchAppBar searchQuery={this.state.searchQuery} textChangeHandler={this.textChangeHandler} />
                    </MDBCol>
                </MDBRow>

                {this.state.loader ? 
                    <div style={{margin: 25}}>
                        <h3>Loading . . .</h3>
                    </div>
                    :
                    <MDBRow>
                        <MDBCol md="12">
                            <TutorsList tutors={tuts.filter(this.searchingForName(this.state.searchQuery))} />
                        </MDBCol>
                    </MDBRow>
                }

            </MDBContainer>
        );
    }
}

const styles = {
    typright: {
        marginTop: 50
    },
    root: {
        width: "100%",
        overflowX: "auto"
    },
    table: {
        width: "100%"
    }
};

const mapStateToProps = (store) => {
    return {
      tutors: store.tutorDataReducer.tutors
    } 
  }

export default connect(mapStateToProps, { addTuitionRequest })(StudentProfile);