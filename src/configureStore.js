import {createStore, applyMiddleware} from 'redux';
import reducer from '../src/reducers/employeeListReducer';
import thunk from 'redux-thunk';

const configureStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

export default configureStore;
