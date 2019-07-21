import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBarEditTutor from '../../../myComponents/TitleAppBar';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CITIES } from '../../../../constants/Constants';
import { connect } from 'react-redux';
import { updateStudent } from '../../../../redux/actions/StudentDataAction';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    button: {
      margin: theme.spacing.unit,
      marginTop: 25,
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });

class EditStudentProfile extends Component {

    state = {
        _id: '',
        name: '',
        email: '',
        password: '',
        gender: '',
        city: '',
        address: '',
        sClass: '',
        subject1: '',
        subject2: '',
        subject3: '',

        labelWidth: 0,
    }

    componentDidMount() {
        let student = this.props.location.query.student;
        if(student) {
            this.setState({
                _id: student.id,
                name: student.name,
                email: student.email,
                password: student.password,
                gender: student.gender,
                city: student.city,
                address: student.address,
                sClass: student.sClass,
                subject1: student.subject1,
                subject2: student.subject2,
                subject3: student.subject3,
                labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
            })
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    updateHandler = () => {
        let { _id, gender, name, email, password, city, address, 
            sClass, subject1, subject2, subject3  } = this.state;

        if (name===""||email===""||password===""||city===""||address===""||sClass===""||subject1===""||subject2===""||subject3==="") {
            alert("No empty field allowed!");
        } else {
            var studentInfo = {
                _id,
                name,
                email,
                password,
                gender,
                city,
                address,
                sClass,
                subject1,
                subject2,
                subject3
            }

            this.props.updateStudent(studentInfo);
            this.props.history.push('/StudentDashboard');
        }
    }

    render() {
        const { classes } = this.props;
        let student = this.props.location.query.student;
        console.log("PROPS:", student);

        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                
                <AppBarEditTutor title='Edit Profile' backLink='/StudentDashboard' />
                
                <Paper style={{width: '85%', paddingTop: 30, paddingBottom: 20, paddingLeft: 30, paddingRight: 30, marginBottom: 10}}>
                    <TextField
                        id="standard-full-width"
                        label="Name"
                        placeholder="Enter your name"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Email"
                        placeholder="Enter your email"
                        fullWidth
                        type='email'
                        margin="normal"
                        variant="outlined"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Password"
                        placeholder="Enter new password"
                        fullWidth
                        // type='password'
                        margin="normal"
                        variant="outlined"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <FormControl fullWidth variant="outlined" className={classes.formControl}>
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
                    
                    <TextField
                        id="standard-full-width"
                        label="Address"
                        placeholder="Enter your address"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField
                        id="standard-full-width"
                        label="Degree Title"
                        placeholder="Enter degree to teach i.e. Software Engineering"
                        fullWidth
                        type='number'
                        margin="normal"
                        name="sClass"
                        value={this.state.sClass}
                        onChange={this.handleChange}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    
                    <TextField
                        id="standard-full-width"
                        label="Subject 1"
                        placeholder="Enter subject to teach"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        name="subject1"
                        value={this.state.subject1}
                        onChange={this.handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    
                    <TextField
                        id="standard-full-width"
                        label="Subject 2"
                        placeholder="Enter subject to teach"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        name="subject2"
                        value={this.state.subject2}
                        onChange={this.handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    
                    <TextField
                        id="standard-full-width"
                        label="Subject 3"
                        placeholder="Enter subject to teach"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        name="subject3"
                        value={this.state.subject3}
                        onChange={this.handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <Button onClick={() => this.updateHandler()} variant="contained" color="primary" className={classes.button}>
                      Update
                    </Button>  
                </Paper>   

            </Grid>
        )
    }
}
 export default connect(null, { updateStudent })(withStyles(styles)(EditStudentProfile));