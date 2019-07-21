import { ADD_TUITION_REQ, EDIT_TUITION_REQ, GET_TUITION_REQ, DELETE_TUITION_REQ } from '../actions/TuitionRequestAction';

var initState = {
    tuitions: [
        {
            id: '7d1sd5sd1sd2d4s2',
            trSenderId: '00dfdfx71sfdf014',
            trCity: 'Toba Tek Singh',
            trAddress: 'Perrha, Toba Tek Singh',
            trClass: '15',
            trDegreeL: 'Masters',
            trDegreeT: 'Software Engineering',
            trSubject: 'Artificial Intelligence',
            trPostedAt: '15-May-2019',
            timeFrom: '10:00 AM',
            timeTo: '11:00 AM'
        },
        {
            id: '1sddssd23sdd56ds45',
            trSenderId: '004100d0d0fdf0fd',
            trCity: 'Sahiwal',
            trClass: '12',
            trAddress: 'Perrha, Toba Tek Singh',
            trDegreeL: 'Intermediate',
            trDegreeT: 'F.Sc (Pre Engg.)',
            trSubject: 'Mathematics',
            trPostedAt: '17-August-2018',
            timeFrom: '02:30 PM',
            timeTo: '05:00 PM'
        },
        {
            id: '4ds4sddscsddsc11ew',
            trSenderId: '00dfdfd0d0qpa10',
            trCity: 'Lahore',
            trClass: '13',
            trAddress: 'Perrha, Toba Tek Singh',
            trDegreeL: 'Bachelors',
            trDegreeT: 'Computer Science',
            trSubject: 'Computer Network',
            trPostedAt: '10-June-2019',
            timeFrom: '04:00 PM',
            timeTo: '05:30 PM'
        },
    ]
};

export default function tuitionRequestReducer(state = initState, action) {
    switch (action.type) {
        case ADD_TUITION_REQ:
        {
            let tuitions = state.tuitions;
            tuitions.push(action.data);
            
            return {
                ...state,
                tuitions
            }

        }

        case EDIT_TUITION_REQ:
        {
            let tuitions = state.tuitions;
            return {
                ...state,
                tuitions: tuitions.push(action.data)
            }

        }   
    
        default:
            return state;
    }
}