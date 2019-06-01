import React, { Component } from 'react';
import '../../App.css';
import AppBar from '../AppBar/AppBar';
import TutorsList from '../TutorsList/TutorsList';
import MainDrawer from '../MainDrawer/MainDrawer';
import TutorGetStart from '../tutorLayout/GetStart/GettingStarted';
import Profile from '../Profile';

class Home extends Component {
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
      <AppBar toggleDrawer={this.toggleDrawer} searchQuery={this.state.searchQuery} searchTextChangeHandler={this.searchTextChangeHandler} />
      <TutorsList className='TutorsList' searchQuery={this.state.searchQuery} />
      <MainDrawer toggleDrawer={this.toggleDrawer} state={this.state.left} />
    </div>
  );
}
}

export default Home;