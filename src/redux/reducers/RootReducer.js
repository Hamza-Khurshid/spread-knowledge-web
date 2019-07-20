import tutorDataReducer from './TutorDataReducer';
import tuitionRequestReducer from './TuitionRequestReducer';
import messageReducer from './MessageReducer';
import studentDataReducer from './StudentDataReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    tutorDataReducer,
    studentDataReducer,
    tuitionRequestReducer,
    messageReducer,
});