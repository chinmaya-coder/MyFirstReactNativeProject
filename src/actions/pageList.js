import {GET_EMP_LIST} from '../redux-action-types/employeeConstant';

//Passing data to reducer
export function setPageList(pageList) {
  return {
    type: GET_EMP_LIST,
    payload: pageList,
  };
}

/*
Action creators
API Calling and fetch data
*/

export function getPageList() {
  return async (dispatch) => {
    try {
      const data = await fetch(
        'http://dummy.restapiexample.com/api/v1/employees',
      );
      const response = await data.json();
      await dispatch(setPageList(response));
    } catch (error) {
      console.error(error);
    }
  };
}
