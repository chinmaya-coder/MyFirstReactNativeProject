import {GET_EMP_LIST} from '../redux-action-types/employeeConstant';

/// Declare initialState
const initialState = {
  pageList: [],
};

/// Reducer
const employeeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMP_LIST:
      return {
        ...state,
        pageList: action.payload.data,
      };
    default:
      return state;
  }
};

export default employeeListReducer;
