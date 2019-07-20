import React, { Component } from 'react';
import '../../../App.css';
import AppBar from '../../tutorLayout/TutorDashboard/components/DashAppBar';
import Drawer from '../../tutorLayout/TutorDrawer/TutorDrawer';
import TutorProfile from '../../tutorLayout/TutorDashboard/components/TutorProfile';
import { connect } from 'react-redux';


class StudentDashboard extends Component {
  state = {
    searchQuery: '',
    left: false
  }

  componentWillMount() {
    let user = localStorage.getItem("username");
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    let gender = localStorage.getItem("gender");
    console.log("username", user, email, password, gender);
  }

  toggleDrawer = (open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ left: open });
  };

  searchTextChangeHandler = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }

  render() { 
    let tutor = localStorage.getItem("authUser");
    tutor = JSON.parse(tutor);   
  return (
    <div className="App">
        <AppBar toggleDrawer={this.toggleDrawer} />
        {/* <TutorProfile tutors={this.props.tutors} /> */}
        <Drawer toggleDrawer={this.toggleDrawer} state={this.state.left} />

    </div>
  );
}
}

const mapStateToProps = (store) => {
    return {
      tutors: store.tutorDataReducer.tutors
    } 
  }

export default connect(mapStateToProps)(StudentDashboard);