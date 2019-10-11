import axios from 'axios';
import * as types from '../state/actionTypes';

// 7: Design action creators that will activate the reducers

const smurfs = ''

export const getSmurfs = () => dispatch => {
  dispatch({ type: types.GET_SMURFS });
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data);
      dispatch({ type: types.GET_SMURFS, payload: res.data });
    })
    .catch(err => {
      console.log('error', err.response);
    });
}