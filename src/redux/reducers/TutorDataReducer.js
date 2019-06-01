import { ADD_TUTOR, EDIT_TUTOR, GET_TUTOR, DELETE_TUTOR } from '../actions/TutorDataAction';

//imgURL: "https://i.ibb.co/Hhhr5XW/38674381-909016475952869-9216475105356414976-n-Copy.jpg"
// https://i.ibb.co/gzkFHJ9/faiz-mustafa.jpg
//https://i.ibb.co/1swJS3Z/daniel.jpg


var initState = {
    tutors: [
        {
            tName: 'Faizan Mustafa',
            tEmail: 'faizan@gmail.com',
            tPassword: 'faizan123',
            imgURL: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/02/16/Pictures/_3c43eb5c-31d0-11e9-8baa-80fb3b94486c.jpg',
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
            tName: 'Hamza Khurshid',
            tEmail: 'hamza@gmail.com',
            tPassword: 'hamza123',
            imgURL: 'https://www.indiewire.com/wp-content/uploads/2016/05/daniel-craig.jpg?w=692',
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
            console.log('=================Tutors before addition===================');
            console.log(tutors);
            console.log('====================================');
            tutors = tutors.concat(action.data);
            console.log('=================Tutors after addition===================');
            console.log(tutors);
            console.log('====================================');
            
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

        // case GET_TUTOR:
        // {
        //     let tutor = state.tutors.filter( tutor => tutor.id === action.data );
        //     return {
        //         ...state,
        //         tutors: tutors.push(action.data)
        //     }

        // }    
    
        default:
            return state;
    }
}