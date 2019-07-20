import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBarEditTutor from '../../../myComponents/TitleAppBar';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
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

class EditTutorProfile extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        phone: '',
        city: '',
        address: '',
        tDegreeL: '',
        tDegreeT: '',
        eDegreeL: '',
        eDegreeT: '',
        wttDegreeL: '',
        wttDegreeT: '',
        subject1: '',
        subject2: '',
        subject3: '',
        feeFrom: '',
        feeTo: '',

        labelWidth: 0,
    }

    componentDidMount() {
        this.setState({
          labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    updateHandler = () => {
        let { name, email, password, phone, city, address, tDegreeL, 
            tDegreeT, eDegreeL, eDegreeT, wttDegreeL, wttDegreeT, 
            subject1, subject2, subject3, feeFrom, feeTo  } = this.state;

            console.log("Name TO UPDATE=======>", name)
            console.log("Email TO UPDATE=======>", email)
            console.log("Password TO UPDATE=======>", password)
            console.log("Phone TO UPDATE=======>", phone)
            console.log("City TO UPDATE=======>", city)
            console.log("Address TO UPDATE=======>", address)
            console.log("T LevelDATA TO UPDATE=======>", tDegreeL)
            console.log("T TitleDATA TO UPDATE=======>", tDegreeT)
            console.log("E LevelDATA TO UPDATE=======>", eDegreeL)
            console.log("E Title DATA TO UPDATE=======>", eDegreeT)
            console.log("WTT Level DATA TO UPDATE=======>", wttDegreeL)
            console.log("WWT Title DATA TO UPDATE=======>", wttDegreeT)
            console.log("Subject 1 DATA TO UPDATE=======>", subject1)
            console.log("Subject 2 DATA TO UPDATE=======>", subject2)
            console.log("Subject 3 DATA TO UPDATE=======>", subject3)
            console.log("Fee From DATA TO UPDATE=======>", feeFrom)
            console.log("Fee To DATA TO UPDATE=======>", feeTo)

            
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                
                <AppBarEditTutor title='Edit Profile' backLink='/TutorDashboard' />
                
                <Paper style={{width: '85%', paddingTop: 20, paddingBottom: 20, paddingLeft: 30, paddingRight: 30, marginBottom: 10}}>
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
                        type='password'
                        margin="normal"
                        variant="outlined"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Phone"
                        placeholder="Enter your phone"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        name="phone"
                        value={this.state.phone}
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
                            <MenuItem value='Karachi'>Karachi</MenuItem>
                            <MenuItem value="Lahore">Lahore</MenuItem>
                            <MenuItem value='Faisalabad'>Faisalabad</MenuItem>
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

                    <FormControl fullWidth variant="outlined" className={classes.formControl}>
                        <InputLabel
                            ref={ref => {
                                this.InputLabelRef = ref;
                            }}
                            htmlFor="outlined-age-simple"
                        >
                            Degree Level
                        </InputLabel>
                        <Select
                            value={this.state.tDegreeL}
                            onChange={this.handleChange}
                            style={{textAlign: 'left'}}
                            input={
                                <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                    name="tDegreeL"
                                    id="outlined-age-simple"
                                />
                            }
                        >
                            <MenuItem value='Matric'>Matric</MenuItem>
                            <MenuItem value="Intermediate">Intermediate</MenuItem>
                            <MenuItem value="Bachelors">Bachelors</MenuItem>
                            <MenuItem value="Masters">Masters</MenuItem>
                            <MenuItem value="Doctorial">Doctorial</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="standard-full-width"
                        label="Degree Title"
                        placeholder="Enter your degree title i.e. Software Engineering"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        name="tDegreeT"
                        value={this.state.tDegreeT}
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
                            Experienced Degree Level
                        </InputLabel>
                        <Select
                            value={this.state.eDegreeL}
                            onChange={this.handleChange}
                            style={{textAlign: 'left'}}
                            input={
                                <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                    name="eDegreeL"
                                    id="outlined-age-simple"
                                />
                            }
                        >
                            <MenuItem value='Matric'>Matric</MenuItem>
                            <MenuItem value="Intermediate">Intermediate</MenuItem>
                            <MenuItem value="Bachelors">Bachelors</MenuItem>
                            <MenuItem value="Masters">Masters</MenuItem>
                            <MenuItem value="Doctorial">Doctorial</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="standard-full-width"
                        label="Experienced Degree Title"
                        placeholder="Enter degree you have taught i.e. Pre-Engineering"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        name="eDegreeT"
                        value={this.state.eDegreeT}
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
                            Degree Level
                        </InputLabel>
                        <Select
                            value={this.state.wttDegreeL}
                            onChange={this.handleChange}
                            style={{textAlign: 'left'}}
                            input={
                                <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                    name="wttDegreeL"
                                    id="outlined-age-simple"
                                />
                            }
                        >
                            <MenuItem value='Matric'>Matric</MenuItem>
                            <MenuItem value="Intermediate">Intermediate</MenuItem>
                            <MenuItem value="Bachelors">Bachelors</MenuItem>
                            <MenuItem value="Masters">Masters</MenuItem>
                            <MenuItem value="Doctorial">Doctorial</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="standard-full-width"
                        label="Degree Title"
                        placeholder="Enter degree to teach i.e. Software Engineering"
                        fullWidth
                        margin="normal"
                        name="wttDegreeT"
                        value={this.state.wttDegreeT}
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
                    
                    <TextField
                        id="standard-full-width"
                        label="Fee Range"
                        placeholder="Fee From i.e. 7500 Rs."
                        fullWidth
                        type='number'
                        margin="normal"
                        variant="outlined"
                        name="feeFrom"
                        value={this.state.feeFrom}
                        onChange={this.handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />     
                    
                    <TextField
                        id="standard-full-width"
                        label="Fee Range"
                        type='number'
                        placeholder="Fee To i.e. 9500 Rs."
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        name="feeTo"
                        value={this.state.feeTo}
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
 export default withStyles(styles)(EditTutorProfile);