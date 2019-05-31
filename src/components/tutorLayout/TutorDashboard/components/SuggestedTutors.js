import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import TutorHeader from '../../../TutorsList/components/TutorHeader';
import SimpleTable from '../../../TutorsList/components/TutorDetails';
import { Grid } from '@material-ui/core';
import HAMZA_IMG from '../../../../assets/images/hamza.jpg';
import FAIZAN_IMG from '../../../../assets/images/faizan.jpg';
import ADEEL_IMG from '../../../../assets/images/adeel.jpg';

const tutors = [
  {
    name: 'Hamza Khurshid',
    qual: 'BS Software Engineering',
    city: 'Faisalabad',
    degreeFrom: '2015',
    degreeTo: '2017',
    imgURL: 'https://i.ibb.co/1swJS3Z/daniel.jpg'
  }, 
  {
    name: 'Faizan Mustafa',
    qual: 'BS Software Engineering',
    city: 'Toba Tek Singh',
    degreeFrom: '2014',
    degreeTo: '2016',
    imgURL: 'https://i.ibb.co/gzkFHJ9/faiz-mustafa.jpg'
  }, 
  {
    name: 'Tania Umair',
    qual: 'BS Physics',
    city: 'Lahore',
    degreeFrom: '2016',
    degreeTo: '2018',
    imgURL: "https://i.ibb.co/Hhhr5XW/38674381-909016475952869-9216475105356414976-n-Copy.jpg"
  },
]

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  para: {
    textAlign: 'left',
    display: 'flex',
    padding: 20,
  },
  text: {
    color: '#AD9101'
  }
});

class TutorsList extends Component {

//   searchingForName = searchQuery => {
//     return function(tutor) {
//       return (
//         tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         tutor.city.toLowerCase().includes(searchQuery.toLowerCase()) || !searchQuery
//       );
//     };
//   };


  render() {
  const { classes } = this.props;
  return (
    <div className={classes.root}>
      { tutors.length > 0 ?
      <div>
        {/* { tutors.filter(this.searchingForName(this.props.searchQuery)).length > 0 ?  */}
        <div>
       {tutors.map( tutor => (

        <ExpansionPanel
          style={{ marginBottom: '5px', marginTop: '5px', marginLeft: "auto", marginRight: "auto" }}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              <TutorHeader tutor={tutor} />
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
              <SimpleTable style={{width: '100%'}}/>
          </ExpansionPanelDetails>
            <Typography className={classes.para}>
              Being a data scientist I'm responsible for data extraction, management, 
              manipulation and implementation.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
        </ExpansionPanel>

      ) )}
        </div>
      {/* : <span className={classes.text}><h4>No match found! </h4> </span> } */}
      </div>
      : <span className={classes.text}> <h3>No tutor found!</h3> </span> }
    </div>
  );
}
}

TutorsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TutorsList);