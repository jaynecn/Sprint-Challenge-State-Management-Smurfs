import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreators';

function NewSmurfForm(props) {
  const [newSmurf, setNewSmurf] = useState([]);

  const {formState, getSmurfs} = props;

  const onNameChange = e => {
    // we have the new value for the name input inside e.target.value
    setNewSmurf({
      name: e.target.value,
      age: newSmurf.age,
      height: newSmurf.height,
      id: newSmurf.id
    });
  };

  const onAgeChange = e => {
    // we have the new value for the name input inside e.target.value
    setNewSmurf({
      name: newSmurf.name,
      age: e.target.value,
      height: newSmurf.height,
      id: newSmurf.id
    });
  };

  const onHeightChange = e => {
    // we have the new value for the name input inside e.target.value
    setNewSmurf({
      name: newSmurf.name,
      age: newSmurf.age,
      height: e.target.value,
      id: newSmurf.id
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.value);

    const brandNewSmurf = {
      name: newSmurf.name,
      age: newSmurf.role,
      height: newSmurf.height,
      id: uuid(),
    };
    const brandNewSmurfList = state.concat(brandNewSmurf);
    setTeamList(newTeamMemberList);
    setNewMemberForm(initialTeamMemberForm);
  }
  
  const onValueChange = event => {
    event.preventDefault();
    console.log(event.target.value);
    // props.addSmurfs();    
  }

  return (
    <div >
      <h2>Add a new Smurf</h2>
      <form className="new-smurf-div" onSubmit={event => handleSubmit(event)}>
        <input onChange={event => onNameChange(event)} value={newSmurf.name} name="name" placeholder = "Name"/>
        <input onChange={event => onAgeChange(event)} name="age" value={newSmurf.age} placeholder = "Age"/>
        <input onChange={event => onHeightChange(event)} value={newSmurf.height} name="height" placeholder = "Height"/>
        <button onSubmit={event => handleSubmit(event)}>Create a New Smurf</button>
      </form>
    </div>
  )
}

export default NewSmurfForm;