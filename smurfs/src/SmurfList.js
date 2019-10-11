import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreators';
// import styled from 'styled-components';

export function SmurfList(props) {
  console.log(props);
  
  const fetchCharacters = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  const {state, getSmurfs} = props;

  return (
    <div >
      <h2>Get those smurfs!</h2>
      <div className="smurfList-div">
        {
          state.map((info) => (
            <div className="smurf-div" key={info.id}>
              <h2>Name: {info.name}</h2>
              <h3>Age: {info.age}</h3>
              <h4>Height: {info.height}</h4>
            </div>
          ))
        }
      </div>
      <button className="smurf-button" onClick={fetchCharacters}>Click Here!</button>
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