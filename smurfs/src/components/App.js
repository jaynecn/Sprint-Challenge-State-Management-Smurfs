import React from "react";
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../state/reducers';
import "./App.css";
import Welcome from './../Welcome';
import SmurfList from './../SmurfList';
import NewSmurfForm from './../NewSmurfForm';

// 4: One enormous reducer
const monsterReducer = combineReducers({
  state: reducers.smurfReducer,
  formState: reducers.formReducer,
})

// 5: use 'create store' to create a Redux store
const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)

// 6: inject the Redux store into the app using Provider


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Welcome />
        <div className="layout-div">
          <SmurfList />
          <NewSmurfForm />
        </div>
      </div>
    </Provider>
  );
}

export default App;
