import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreators';

function NewSmurfForm(props) {

  const {formState, getSmurfs} = props;

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);

    // const newTeamMember = {
    //   id: uuid(),
    //   name: newMemberForm.name,
    //   role: newMemberForm.role,
    //   email: newMemberForm.email,
    // };
    // const newTeamMemberList = teamList.concat(newTeamMember);
    // setTeamList(newTeamMemberList);
    // setNewMemberForm(initialTeamMemberForm);
  }
  
  const onValueChange = event => {
    event.preventDefault();
    props.addSmurfs();    
  }

  return (
    <div >
      <h2>Add a new Smurf</h2>
      <form className="new-smurf-div" onSubmit={event => handleSubmit(event)}>
        <input name="name" placeholder = "Name"/>
        <input name="age" placeholder = "Age"/>
        <input name="height" placeholder = "Height"/>
        <button onSubmit={event => handleSubmit(event)}>Create a New Smurf</button>
      </form>
    </div>
  )
}

export default NewSmurfForm;