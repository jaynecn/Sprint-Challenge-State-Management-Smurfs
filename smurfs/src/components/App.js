import React from "react";
// import thunk from 'redux-thunk';
// import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import * as reducers from './state/reducers';
import "./App.css";
import Welcome from './../Welcome';
import { smurfReducer } from './../state/reducers';

// 4: One enormous reducer
const monsterReducer = combineReducers({
  arrayState: reducers.smurfReducer,
  formState: reducers.formReducer,
})

// 5:


function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;
