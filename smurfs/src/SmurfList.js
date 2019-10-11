import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreators';
// import styled from 'styled-components';

export function SmurfList(props) {
  
  const fetchCharacters = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  const {state, getSmurfs} = props;

  return (
    <div>
      <h2>Test</h2>
      <div>
        {/* {
          state.map((info) => (
            <div>
              <h4>{info.name}</h4>
            </div>
          ))
        } */}
      </div>
      <button className="smurf-button" onClick={fetchCharacters}>Fetch Smurfs!</button>
    </div>
  )
}

const mapStateToProps = state => ({
  characters: state,
});

export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
  actionCreators, // we get all action creators through props (9)
)(SmurfList);