import * as types from './actionTypes';

// const smurfState = [];
export function smurfReducer(arrayState = [], action) {
  switch (action.type) {
    case types.GET_SMURFS:
      return arrayState.concat(action.payload);
    default:
      return arrayState;
  }
}

const initialState = {
  name: '',
  age: '',
  height: '',
  id: '',
}
export function formReducer(state = initialState, action) {
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