import {
  GET_SMURF,
  ADD_SMURF,
  INPUT_CHANGE,
  PREPOPULATE
} from "./actionCreator";

export const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_SMURF:
    case ADD_SMURF:
      return action.payload;
    default:
      return state;
  }
};

const initialForm = {
  name: "",
  age: "",
  height: "",
  id: null
};

export const formReducer = (state = initialForm, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case PREPOPULATE:
      return {
        ...action.payload
      };
    case ADD_SMURF:
      return initialForm;

    default:
      return state;
  }
};
