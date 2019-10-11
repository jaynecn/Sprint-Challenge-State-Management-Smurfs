import axios from 'axios';
import * as types from '../state/actionTypes';

// 7: Design action creators that will activate the reducers

const smurfsApi = 'http://localhost:3333/smurfs'

export const getSmurfs = () => dispatch => {
  axios.get(smurfsApi)
    .then(res => {
      // console.log(res.data);
      dispatch({ type: types.GET_SMURFS, payload: res.data });
    })
    .catch(err => {
      console.log('error', err.response);
    });
}

export const addSmurfs = (info) => dispatch => {
  axios.post(smurfsApi, info)
    .then(res => {
      console.log(res.data);
      dispatch({ type: types.ADD_SMURF,
      payload: res.data });
    })
    .catch(err => {
      console.log('error', err.response);
    })
}

