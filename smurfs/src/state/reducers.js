import * as types from './actionTypes';

const initialArrayState = [];
export function smurfReducer(state = initialArrayState, action) {
  switch (action.type) {
    case types.GET_SMURFS:
      const newState = state.concat(action.payload);
      return newState;
    case types.ADD_SMURF:
      return action.payload;
    default:
      return state;
  }
}

const initialFormState = {
  name: '',
  age: '',
  height: ''
}
export function formReducer(formState = initialFormState, action) {
  switch (action.type) {
    case types.CHANGE_VALUE:
    return {
      ...formState,
      [action.payload.name]: action.payload.value,
    };
    default:
      return formState;
  }
}