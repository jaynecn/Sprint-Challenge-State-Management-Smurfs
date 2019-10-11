import * as types from './actionTypes';

// const smurfState = [];
export function smurfReducer(arrayState = [], action) {
  switch (action.type) {
    case types.GET_SMURFS:
      return state.concat(action.payload);
    default:
      return state;
  }
}

const initialState = {
  name: '',
  age: 0,
  height: '',
  id: 0,
}
export function formReducer(formState = initialState, action) {
  switch (action.type) {
    case types.GET_SMURFS:
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
    default:
      return state;
  }
}