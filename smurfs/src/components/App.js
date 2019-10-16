import React, { Component } from "react";
import Smurf from "./Smurf";
import SmorfForm from "./SmurfForm";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <SmorfForm />
        <Smurf />
      </div>
    );
  }
}

export default App;
