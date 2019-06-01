import { ADD_TUITION_REQ, EDIT_TUITION_REQ, GET_TUITION_REQ, DELETE_TUITION_REQ } from '../actions/TuitionRequestAction';

var initState = {
    tuitions: [
        {
            trSenderId: '065521554455',
            trSender: 'Faizan Mustafa',
            trEmail: 'faizan@gmail.com',
            trPhone: '0336-7725522',
            trCity: 'Toba Tek Singh',
            trClass: '15',
            trAddress: 'Perrha, Toba Tek Singh',
            trDegreeL: 'Masters',
            trDegreeT: 'Software Engineering',
            trSubject: 'Artificial Intelligence',
            trPostedAt: '15-May-2019'
        },
        {
            trSenderId: '1100521554180',
            trSender: 'Sajawal Nadeem',
            trEmail: 'sajawal@gmail.com',
            trPhone: '0336-7725522',
            trCity: 'Sahiwal',
            trClass: '12',
            trAddress: 'Perrha, Toba Tek Singh',
            trDegreeL: 'Intermediate',
            trDegreeT: 'F.Sc (Pre Engg.)',
            trSubject: 'Mathematics',
            trPostedAt: '17-August-2018'
        },
        {
            trSenderId: '85422244177411',
            trSender: 'Alia',
            trEmail: 'alia@gmail.com',
            trPhone: '021-1425585',
            trCity: 'Lahore',
            trClass: '13',
            trAddress: 'Perrha, Toba Tek Singh',
            trDegreeL: 'Bachelors',
            trDegreeT: 'Computer Science',
            trSubject: 'Computer Network',
            trPostedAt: '10-June-2019'
        },
    ]
};

export default function tuitionRequestReducer(state = initState, action) {
    switch (action.type) {
        case ADD_TUITION_REQ:
        {
            let tuitions = state.tuitions;
            console.log('=================Tuition requests before addition===================');
            console.log(tuitions);
            console.log('====================================');
            tuitions = tuitions.concat(action.data);
            console.log('=================Tuition requests after addition===================');
            console.log(tuitions);
            console.log('====================================');
            
            return {
                ...state,
                tuitions: tuitions
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