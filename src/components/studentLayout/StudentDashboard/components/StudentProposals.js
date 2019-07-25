import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TuitionRequest from '../../myComponents/TuitionRequest';
import TitleAppBar from '../../../myComponents/TitleAppBar';
import { HashLoader } from 'react-spinners';
import { getAllProposals } from '../../../../redux/actions/TuitionProposalAction';
import Proposal from '../../../myComponents/Proposal';

class MyProposals extends Component {
    state = {
        loader: true,
        proposals: []
    }

    componentWillMount() {
        let auth = localStorage.getItem('userType');
        if(auth !== 'student') {
            this.props.history.push('/StudentLogin');
        }
    }

    componentDidMount() {
        this.props.getAllProposals();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.getAllProposalsStatus === "done") {
            this.setState({
                proposals: nextProps.proposals,
                loader: false
            })
        }

        if(nextProps.getAllProposalsStatus === "error") {
            this.setState({
                loader: false
            })
        }
    }

    render() {
        let { proposals, loader } = this.state;
        // let student = JSON.parse(localStorage.getItem('authStudent'));
        // tuitions = tuitions.filter( t => t.trSenderId ===  student._id)

        return (
            <div>
                <TitleAppBar title='Tution Requests' backLink='/StudentDashboard' />
                {
                    // loader 
                    // ? 
                    // <div style={{ marginTop: '35vh', marginLeft: '50vw' }}>
                    //     <HashLoader
                    //         color={'#AD9101'}
                    //         loading='true'
                    //     />
                    // </div>
                    // :
                    // proposals.length > 0 ?
                    // proposals.map( tuition => {
                    //     return (
                    //         <Proposal text="I love programming" />
                    //         // <TuitionRequest tuition={tuition} />
                    //     );
                    // } )
                    <Proposal text="I love programming" />
                    // :
                    // <h3 style={{color: '#AD9101',marginLeft: '45vw',marginTop: '35vh'}}>No proposal yet!</h3>
                }                
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        proposals: store.tuitionProposalReducer.proposals,
        getAllProposalsStatus: store.tuitionProposalReducer.getAllProposalsStatus
    }
}

export default connect(mapStateToProps, { getAllProposals })(MyProposals);