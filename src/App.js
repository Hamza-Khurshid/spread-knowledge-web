import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import TutorLogin from './components/tutorLayout/Login/Login';
import TutorSignUp from './components/tutorLayout/SignUp/Signup';
import StudentLogin from './components/studentLayout/Login/Login';
import StudentSignUp from './components/studentLayout/SignUp/Signup';
import TutorGetStart from './components/tutorLayout/GetStart/GettingStarted';
import TutorDashboard from './components/tutorLayout/TutorDashboard/TutorDashboard';
import TuitionRequests from './components/myComponents/TuitionRequests/TuitionRequests';
import StudentDashboard from './components/studentLayout/StudentDashboard/StudentDashboard';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditTutorProfile from './components/tutorLayout/TutorDashboard/components/EditTutorProfile';
import GetStarted from './components/studentLayout/SignUp/GetStarted';
import EditStudentProfile from './components/studentLayout/StudentDashboard/components/EditStudentProfile';
import MyTuitionRequests from './components/studentLayout/TuitionRequests/MyTuitionRequests';
import TutorTuitionRequests from './components/tutorLayout/TuitionRequests/TuitionRequests';

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          path='/'
          exact
          component={Home}
        />
        <Route
          path='/TutorLogin'
          component={TutorLogin}
        />
        <Route
          path='/StudentLogin'
          component={StudentLogin}
        />
        <Route
          path='/StudentSignup'
          component={StudentSignUp}
        />
        <Route
          path='/StudentGetStarted/:id'
          component={GetStarted}
        />
        <Route
          path="/StudentDashboard"
          component={StudentDashboard}
        />
        <Route
          path='/TutorSignup'
          component={TutorSignUp}
        />
        <Route
          path='/TutorGetStart'
          component={TutorGetStart}
        />
        <Route
          path="/TutorDashboard"
          component={TutorDashboard}
        />  
        <Route
          path="/TuitionRequests"
          component={TuitionRequests}
        />  
        <Route
          path="/EditTutorProfile/:id"
          component={EditTutorProfile}
        />  
        <Route
          path="/TutorTuitionRequests"
          component={TutorTuitionRequests}
        />  
        <Route
          path="/EditStudentProfile/:id"
          component={EditStudentProfile}
        />  
        <Route
          path="/StudentTuitionRequests"
          component={MyTuitionRequests}
        /> 
      </div>
    </Router>
  );
}

export default App;
