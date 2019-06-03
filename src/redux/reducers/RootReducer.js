import tutorDataReducer from './TutorDataReducer';
import tuitionRequestReducer from './TuitionRequestReducer';
import messageReducer from './MessageReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    tutorDataReducer,
    tuitionRequestReducer,
    messageReducer,
});