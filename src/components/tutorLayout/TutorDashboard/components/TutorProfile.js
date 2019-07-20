import React from "react";
import { MDBCard, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBBtn, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";

import { makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import SearchAppBar from './AppBar';
import TutorsList from "./SuggestedTutors";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
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
}));

const CardExample = (props) => {
    const classes = useStyles();
    let tutor = localStorage.getItem("authUser");
    tutor = JSON.parse(tutor);

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="4" style={{ padding: 10, margin: 'auto' }}>
                    <MDBCard>
                        <div className="view overlay zoom" style={{ padding: 15, backgroundColor: 'rgba(24, 59, 78, 0.7)' }}>
                            <MDBCardImage src={tutor.imgURL} alt="img-fluid z-depth-1 rounded-circle MDBCard image cap" top hover
                                overlay="white-slight" style={{ height: 200, width: 200, margin: 'auto', borderRadius: 100 }} />
                        </div>
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">{tutor.tName}</MDBCardTitle>
                            <MDBCardText style={{ textAlign: 'justify' }}>
                                Being a data scientist I'm responsible for data extraction, management,
                                manipulation and implementation.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </MDBCardText>
                            <Link to='/EditTutorProfile'>
                                <MDBBtn color="primary" size="md">
                                    Edit Profile
                                </MDBBtn>
                            </Link>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                {/* </MDBRow> */}

                {/* <MDBRow> */}
                <MDBCol md="8" style={{ padding: 10 }}>
                    <div className="card">
                        <div className="card-header" style={{ backgroundColor: 'rgba(24, 59, 78, 0.7)', color: 'white' }}>
                            Profile Information
                        </div>

                        <div className="card-body" style={{ marginTop: 23 }}>
                            <div className={classes.root}>
                                <Table className={classes.table}>
                                    <TableBody>
                                        <TableRow key={1}>
                                            <TableCell align="left">
                                                <b>Qualification</b>
                                            </TableCell>
                                            <TableCell align="left">{tutor.tDegreeL + " of " + tutor.tDegreeT}</TableCell>
                                        </TableRow>
                                        <TableRow key={2}>
                                            <TableCell align="left">
                                                <b>Subjects</b>
                                            </TableCell>
                                            <TableCell align="left">{tutor.subject1 +", "+ tutor.subject2+ ", "+ tutor.subject3}</TableCell>
                                        </TableRow>
                                        <TableRow key={2}>
                                            <TableCell>
                                                <b>Degree to Taught</b>
                                            </TableCell>
                                            <TableCell align="left">{tutor.wttDegreeL + " of " + tutor.wttDegreeT}</TableCell>
                                        </TableRow>
                                        <TableRow key={3}>
                                            <TableCell>
                                                <b>Experience</b>
                                            </TableCell>
                                            <TableCell align="left">{tutor.eDegreeL + " of " + tutor.eDegreeT}</TableCell>
                                        </TableRow>
                                        <TableRow key={4}>
                                            <TableCell>
                                                <b>Contact</b>
                                            </TableCell>
                                            <TableCell align="left">{tutor.tPhone + ", " + tutor.tEmail}</TableCell>
                                        </TableRow>
                                        <TableRow key={5}>
                                            <TableCell>
                                                <b>Fee Range</b>
                                            </TableCell>
                                            <TableCell align="left">Rs. {tutor.fTo + " of " + tutor.fFrom}</TableCell>
                                        </TableRow>
                                        <TableRow key={6}>
                                            <TableCell>
                                                <b>Gender</b>
                                            </TableCell>
                                            <TableCell align="left">{ tutor.tGender == "male" ? "Male" : "Female"}</TableCell>
                                        </TableRow>
                                        <TableRow key={7}>
                                            <TableCell>
                                                <b>Address</b>
                                            </TableCell>
                                            <TableCell align="left">{tutor.tAddress}</TableCell>
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

            <MDBRow>
                <MDBCol md="12">
                    <TutorsList tutors={props.tutors} />
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default CardExample;