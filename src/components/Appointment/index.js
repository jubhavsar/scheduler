import React, { useState } from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Empty from './Empty';
import Show from './Show';
import Form from './Form'
import useVisualMode from 'hooks/useVisualMode';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';
// import { getInterview } from 'helpers/selectors';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

//Appointment component
const Appointment = (props) => {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const [action, setAction] = useState(CREATE);

  function save(name, interviewer) {
    if(!name || !interviewer){
      alert("You have to enter student name and interviewer");
      return;
    }
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);
     props.bookInterview(props.id, interview, action)
     .then(() =>{
      transition(SHOW);
     })
     .catch((error) =>{
      transition(ERROR_SAVE, true)
     });
  }

  function edit() {
    transition(EDIT);
    setAction(EDIT);
  }
  function create() {
    transition(CREATE);
    setAction(CREATE);
  }

  function destroy(){
    transition(DELETING, true);
    props.cancelInterview(props.id)
    .then( () =>{
      transition(EMPTY)
     }) 
    .catch((error) => {
      transition(ERROR_DELETE, true)
    });
  }

  return (
  <article className="appointment">
  <Header time={props.time}/>
    {mode === SHOW && (
      <Show 
      student={props.interview.student } 
      interviewer={props.interview.interviewer.name} 
      // bookInterview={props.bookInterview}
      onDelete={() => transition(CONFIRM)}  
      onEdit={edit}
      />
      )}
    {mode === CREATE && (
      <Form interviewers={Object.values(props.interviewers)} onCancel={back} onSave={save}/>
    )}
    {mode === EDIT && (
      <Form interviewers={Object.values(props.interviewers)} 
            student={props.interview.student}
            interviewer={props.interview.interviewer.id}
            onCancel={back} onSave={save} />
    )}
    {mode === EMPTY && <Empty onAdd={create} />}
    {mode === SAVING && <Status message="Saving" />}
    {mode === DELETING && <Status message="Deleting" />}
    {mode === CONFIRM && <Confirm message="Are you sure you want to delete?" onCancel={back} onConfirm={destroy}
    />}
    {mode === ERROR_SAVE && <Error message="Appointment can't save" onClose={back} />}
    {mode === ERROR_DELETE && <Error message="Appointment can't delete" onClose={back} />}

  </article>
  )
};

export default Appointment;


 