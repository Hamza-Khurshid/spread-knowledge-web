import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 860,
        margin: 'auto'
    },
    heading: {
        // fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        // fontSize: theme.typography.pxToRem(15),
        // color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        // borderLeft: `2px solid ${theme.palette.divider}`,
        // padding: theme.spacing(1, 2),
    },
    link: {
        // color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

function sendProposalHandler() {
    alert("Proposal Sent!")
}

function TuitionRequest(props) {
    const classes = useStyles();
    let tuition = props.tuition;

    return (
        <div className={classes.root}>
            <ExpansionPanel style={{marginTop: 8}}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <Typography variant="h4" style={{ marginBottom: 15, color: '#183b4e' }}>Tutor Required!</Typography>
                        <Divider />
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Typography variant="h6">{tuition.trDegreeL + " of " + tuition.trDegreeT}</Typography>
                            <Typography variant="h6">{tuition.trCity}</Typography>
                        </div>
                    </div>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                <div style={{margin: 'auto'}}>
                                <div className="card-body" style={{ marginTop: -80 }}>
                                    <div className={classes.root}>
                                        <Table className={classes.table}>
                                            <TableBody>
                                                <TableRow key={0}>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow key={1}>
                                                    <TableCell align="left">
                                                        <b>Class</b>
                                                    </TableCell>
                                                    <TableCell align="left">{tuition.trClass}</TableCell>
                                                </TableRow>
                                                <TableRow key={2}>
                                                    <TableCell align="left">
                                                        <b>Subject</b>
                                                    </TableCell>
                                                    <TableCell align="left">{tuition.trSubject}</TableCell>
                                                </TableRow>
                                                <TableRow key={3}>
                                                    <TableCell>
                                                        <b>Posted At</b>
                                                    </TableCell>
                                                    <TableCell align="left">{tuition.trPostedAt}</TableCell>
                                                </TableRow>
                                                <TableRow key={4}>
                                                    <TableCell>
                                                        <b>Contact</b>
                                                    </TableCell>
                                                    <TableCell align="left">{tuition.trPhone + ", " + tuition.trEmail}</TableCell>
                                                </TableRow>
                                                <TableRow key={5}>
                                                    <TableCell>
                                                        <b>Address</b>
                                                    </TableCell>
                                                    <TableCell align="left">{tuition.trAddress}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                </ExpansionPanelDetails>
                <Divider style={{marginTop: -45}}/>
                <ExpansionPanelActions>
                    <Button onClick={sendProposalHandler} color="primary" style={{marginRight: 45}}>
                        SEND PROPOSAL
                    </Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
        </div>
    );
}

export default TuitionRequest;