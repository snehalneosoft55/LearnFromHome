import * as actionTypes from "../lib/constants/actionTypes";

const postUserData = data => (
  {
  type: actionTypes.REGISTER,
  payload: data
});

export function postUserInfo(userData1) {
  return function(dispatch) {
    return 
      dispatch(postUserData(userData1));
   
  };
}
