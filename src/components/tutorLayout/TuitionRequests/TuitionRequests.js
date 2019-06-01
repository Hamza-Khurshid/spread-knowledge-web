import React, { Component } from 'react';
import { connect } from 'react-redux';
import TuitionRequest from '../../myComponents/TuitionRequest';

class TuitionRequests extends Component {

    render() {
        let {tuitions} = this.props;

        return (
            <div>
                { tuitions.length > 0 ?
                 tuitions.map( tuition => {
                     return (
                        <TuitionRequest tuition={tuition} />
                     );
                 } )
                : "No tuition request!" }                
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        tuitions: store.tuitionRequestReducer.tuitions
    }
}

export default connect(mapStateToProps)(TuitionRequests);