import tutorDataReducer from './TutorDataReducer';
import tuitionRequestReducer from './TuitionRequestReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    tutorDataReducer,
    tuitionRequestReducer,
});