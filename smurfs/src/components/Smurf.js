import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, prepopulate } from "../state/actionCreator";

const Smurf = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  const mySmurfs = props.smurfs;
  console.log("this is", mySmurfs);

  return (
    <div>
      {mySmurfs.map(char => (
        <div>
          {<h5>Name:{char.name}</h5>}
          <p>Age: {char.age}</p>
          <p>Height: {char.height}</p>
          <button onClick={() => props.prepopulate(char)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default connect(
  state => ({ smurfs: state.smurfs }),
  dispatch => ({
    fetchSmurfs: () => dispatch(fetchSmurfs()),
    prepopulate: values => dispatch(prepopulate(values))
  })
)(Smurf);
