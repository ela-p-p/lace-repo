import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import nameReducer from './nameReducer';

export default combineReducers({
  auth: authReducer,
  name: nameReducer,
  // form: formReducer,
});
