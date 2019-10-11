import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreators';

function NewSmurfForm(props) {
  const initialFormState = {
    name: '',
    age: '',
    height: ''
  }

  const [newSmurf, setNewSmurf] = useState(initialFormState);

  const {formState, getSmurfs} = props;

  
    const handleSubmit = event => {
    event.preventDefault();
    props.addSmurfs(newSmurf);
  }
  
  const onValueChange = event => {
    setNewSmurf({
      ...newSmurf,
      [event.target.name]: event.target.value
    })  
  }

  return (
    <div >
      <h2>Add a new Smurf</h2>
      <form className="new-smurf-div" onSubmit={event => handleSubmit(event)}>
        <input onChange={event => onValueChange(event)} value={newSmurf.name} name="name" placeholder = "Name"/>
        <input onChange={event => onValueChange(event)} name="age" value={newSmurf.age} placeholder = "Age"/>
        <input onChange={event => onValueChange(event)} value={newSmurf.height} name="height" placeholder = "Height"/>
        <button onSubmit={event => handleSubmit(event)}>Create a New Smurf</button>
      </form>
    </div>
  )
}

export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
  actionCreators, // we get all action creators through props (9)
)(NewSmurfForm);