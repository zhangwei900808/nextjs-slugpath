import { actionTypes } from "./actions";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  name: ""
};

function myreducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGENAME_SUCCESS:
      return {
        ...state,
        ...{ name: "JustinZhang" }
      };
    default:
      return state;
  }
}

export default myreducer;
