import React, { Component } from "react";
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

class StudentProfile extends Component {
    state = {
        tutors: [],
        loader: false
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.tutors) {
            this.setState({
                tutors: nextProps.tutors,
                loader: false
            })
        }
    }
    
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
                                            {/* <TableRow key={5}>
                                                <TableCell>
                                                    <b>Fee Range</b>
                                                </TableCell>
                                                <TableCell align="left">Rs. {student.fTo + " of " + student.fFrom}</TableCell>
                                            </TableRow> */}
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
                                                        <MDBBtn style={{marginLeft: 105,marginTop: 25, backgroundColor: '#183b4e', color: 'white'}} color="#183b4e" size="md">
                                                            Edit Profile
                                                        </MDBBtn>
                                                    </Link>
                                                </TableCell>

                                                <TableCell>
                                                </TableCell>
                                            </TableRow>
                                            
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="12">
                        <SearchAppBar />
                    </MDBCol>
                </MDBRow>

                {this.state.loader ? 
                    <div style={{margin: 25}}>
                        <h3>Loading . . .</h3>
                    </div>
                    :
                    <MDBRow>
                        <MDBCol md="12">
                            <TutorsList tutors={tuts} />
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

export default connect(mapStateToProps)(StudentProfile);