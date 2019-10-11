import axios from "axios";

const BASE_URL = "http://localhost:3333";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURFS = "ADD_SMURFS";
export const GET_SMURF = "GET_SMURF";

export const fetchSmurfs = () => dispatch => {
  axios
    .get(`${BASE_URL}/smurfs`)
    .then(res => {
      dispatch({ type: GET_SMURF, payload: res.data });
      //   console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

// Add smurf
export const addSmurf = newSmurf => dispatch => {
  axios
    .post(`${BASE_URL}/smurfs`, newSmurf)
    .then(res => {
      dispatch({ type: ADD_SMURF, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};
