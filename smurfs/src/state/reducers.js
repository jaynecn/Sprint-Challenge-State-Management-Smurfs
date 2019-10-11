import * as types from './actionTypes';

const initialArrayState = [];
export function smurfReducer(state = initialArrayState, action) {
  switch (action.type) {
    case types.GET_SMURFS:
      const newState = state.concat(action.payload);
      return newState;
    default:
      return state;
  }
}

const initialFormState = {
  name: '',
  age: '',
  height: '',
  id: '',
}
export function formReducer(formState = initialFormState, action) {
  switch (action.type) {
    case types.GET_SMURFS:
    return {
      ...formState,
      [action.payload.name]: action.payload.value,
    };
    default:
      return formState;
  }
}