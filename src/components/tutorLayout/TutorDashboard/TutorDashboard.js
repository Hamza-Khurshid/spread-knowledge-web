import React, { Component } from 'react';
import '../../../App.css';
import AppBar from './components/DashAppBar';
import Drawer from '../TutorDrawer/TutorDrawer';
import TutorProfile from './components/TutorProfile';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class TutorDashboard extends Component {
  state = {
    searchQuery: '',
    left: false
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
  return (
    <div className="App">
        <AppBar toggleDrawer={this.toggleDrawer} />
        <TutorProfile />
        <Drawer toggleDrawer={this.toggleDrawer} state={this.state.left} />


        <Router>
            <Route exact path='/' component={TutorProfile} />
        </Router>

    </div>
  );
}
}

export default TutorDashboard;