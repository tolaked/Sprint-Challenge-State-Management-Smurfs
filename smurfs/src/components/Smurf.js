import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../state/actionCreator";

const Smurf = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  const mySmurfs = props.state.smurfs;
  console.log("this is", mySmurfs);

  return (
    <div>
      {mySmurfs.map(char => (
        <div>
          {<h5>Name:{char.name}</h5>}
          <p>Age: {char.age}</p>
          <p>Height: {char.height}</p>
        </div>
      ))}
    </div>
  );
};

export default connect(
  state => ({ state: state }),
  dispatch => ({ fetchSmurfs: () => dispatch(fetchSmurfs()) })
)(Smurf);
