import { GET_SMURF, ADD_SMURF, ADD_SMURFS } from "./actionCreator";

const initialState = {
  smurfs: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
