import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:''
};
const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionTypes.REGISTER:
      console.log("in switch",action.payload);
      return {
        
        ...state,
        userData: action.payload,
      };
      
    default:
      console.log("In default", state.userData)
        return state
  }
};

export default registerReducer;