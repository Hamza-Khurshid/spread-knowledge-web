import { ADD_TUTOR, EDIT_TUTOR, GET_TUTOR, DELETE_TUTOR, UPDATE_TUTOR } from '../actions/TutorDataAction';

//imgURL: "https://i.ibb.co/Hhhr5XW/38674381-909016475952869-9216475105356414976-n-Copy.jpg"
// https://i.ibb.co/gzkFHJ9/faiz-mustafa.jpg
//https://i.ibb.co/1swJS3Z/daniel.jpg


var initState = {
    tutors: [
        {
            id: '00dfdfd0d0fdf0fd',
            tName: 'Faizan Mustafa',
            tEmail: 'faizan@gmail.com',
            tPassword: 'faizan123',
            imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Chris_Evans_SDCC_2014.jpg/220px-Chris_Evans_SDCC_2014.jpg',
            tGender: 'male',
            tPhone: '0336-7725522',
            tCity: 'Toba Tek Singh',
            tAddress: 'Perrha, Toba Tek Singh',
            tDegreeL: 'Masters',
            tDegreeT: 'Software Engineering',
            eDegreeL: 'Intermediate',
            eDegreeT: 'F.Sc (Pre Engineering)',
            wttDegreeL: 'Bachelors',
            wttDegreeT: 'Computer Science',
            subject1: 'Artificial Intelligence',
            subject2: 'Machine Learning',
            subject3: 'Computer Graphics',
            fFrom: '7500',
            fTo: '10500'
        },
        {
            id: '00dfdfd0d0fdf014',
            tName: 'Sajawal Nadeem',
            tEmail: 'sajawal@gmail.com',
            tPassword: 'sajawal123',
            imgURL: 'https://www.liveabout.com/thmb/9vQzNaQgTElyqGFtKfJa9JnDjvI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-102558225-5ba1336dc9e77c0050045c65.jpg',
            tGender: 'male',
            tPhone: '0336-7725522',
            tCity: 'Sahiwal',
            tAddress: 'Perrha, Toba Tek Singh',
            tDegreeL: 'Masters',
            tDegreeT: 'Computer Graphics',
            eDegreeL: 'Intermediate',
            eDegreeT: 'F.Sc (Pre Engineering)',
            wttDegreeL: 'Bachelors',
            wttDegreeT: 'Computer Science',
            subject1: 'Graphic Designing',
            subject2: 'Machine Learning',
            subject3: 'Computer Graphics',
            fFrom: '2500',
            fTo: '5500'
        },
        {
            id: '00dfdfd0d0fdf000',
            tName: 'Hamza Khurshid',
            tEmail: 'hamza@gmail.com',
            tPassword: 'hamza123',
            imgURL: 'http://www.usmilitariaforum.com/uploads//monthly_05_2019/post-2322-0-18059200-1557703038.jpg',
            tGender: 'male',
            tPhone: '0336-7725522',
            tCity: 'Nankana Sahib',
            tAddress: 'Qila Noor Pur, Nankana Sahib',
            tDegreeL: 'Masters',
            tDegreeT: 'Software Engineering',
            eDegreeL: 'Intermediate',
            eDegreeT: 'F.Sc (Pre Engineering)',
            wttDegreeL: 'Bachelors',
            wttDegreeT: 'Computer Science',
            subject1: 'Artificial Intelligence',
            subject2: 'Machine Learning',
            subject3: 'Deep Learning',
            fFrom: '4500',
            fTo: '7500'
        },
    ]
};

export default function tutorDataReducer(state = initState, action) {
    switch (action.type) {
        case ADD_TUTOR:
        {
            let tutors = state.tutors;
            tutors = tutors.concat(action.data);
            
            return {
                ...state,
                tutors: tutors
            }

        }

        case EDIT_TUTOR:
        {
            let tutors = state.tutors;
            return {
                ...state,
                tutors: tutors.push(action.data)
            }

        }

        case UPDATE_TUTOR:
        {
            let tutors = state.tutors.map( tutor => {
                if(tutor.id === action.data.id) {
                    return action.data
                } else {
                    return tutor
                }
            });
            return {
                ...state,
                tutors
            }

        }    
    
        default:
            return state;
    }
}