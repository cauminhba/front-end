
import authReducer from './auth'
import memberReducer from './member'
const { combineReducers } = require('redux');

const rootReducer = combineReducers({
    auth: authReducer,
    member: memberReducer,
});
export default rootReducer