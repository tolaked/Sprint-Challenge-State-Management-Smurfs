import axios from "axios";

axios.defaults.baseURL = "http://localhost:3333";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURFS = "ADD_SMURFS";
export const GET_SMURF = "GET_SMURF";
export const INPUT_CHANGE = "INPUT_CHANGE";
export const PREPOPULATE = "PREPOPULATE";
export const DELETE_SMURF = "DELETESMURF";

export const prepopulate = values => {
  return {
    type: PREPOPULATE,
    payload: values
  };
};

export const inputChange = target => {
  return {
    type: INPUT_CHANGE,
    payload: target
  };
};

export const createSmurf = data => {
  return {
    type: ADD_SMURF,
    payload: data
  };
};

export const deleteSmurf = data => ({
  type: DELETE_SMURF,
  payload: data
});

export const fetchSmurfs = () => dispatch => {
  axios
    .get("/smurfs")
    .then(res => {
      dispatch({ type: GET_SMURF, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

// Add smurf
export const addSmurf = newSmurf => dispatch => {
  axios
    .post("/smurfs", newSmurf)
    .then(res => {
      dispatch(createSmurf(res.data));
    })
    .catch(err => {
      console.log("this", err);
    });
};

export const updateSmurf = ({ id, ...smurf }) => dispatch => {
  axios
    .put(`smurfs/${id}`, smurf)
    .then(res => {
      dispatch(createSmurf(res.data));
    })
    .catch(err => {
      console.log(err);
    });
};

export const removeSmurf = ({ id, ...smurf }) => dispatch => {
  axios
    .delete(`smurfs/${id}`, smurf)
    .then(res => {
      dispatch(deleteSmurf(res.data));
    })
    .catch(err => {
      console.log(err);
    });
};
