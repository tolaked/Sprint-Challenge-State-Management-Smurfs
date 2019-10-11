import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./components/App";
import { reducer, formReducer } from "./state/reducer";

const reducers = combineReducers({
  smurfs: reducer,
  form: formReducer
});
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
