import React from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Empty from './Empty';
import Show from './Show';
import Form from './Form'
import useVisualMode from 'hooks/useVisualMode';
import Status from './Status';
import Confirm from './Confirm';
import { getInterview } from 'helpers/selectors';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";

//Appointment component
const Appointment = (props) => {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
     props.bookInterview(props.id, interview)
     .then(() =>{
      transition(SHOW);
     })
  }

  function remove(){
    transition(DELETING);
    props.cancelInterview(props.id)
    .then( () =>{
      transition(EMPTY)
     }) 
  }

  return (
  <article className="appointment">
  <Header time={props.time}/>
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show student={props.interview.student } interviewer={props.interview.interviewer.name} 
      onDelete={() => transition(CONFIRM)}  
      />
      )}
    {mode === CREATE && (
      <Form interviewers={Object.values(props.interviewers)} onCancel={() => back(EMPTY)} onSave={save}/>
    )}
    {mode === SAVING && <Status message="Saving" />}
    {mode === DELETING && <Status message="Deleting" />}
    {mode === CONFIRM && <Confirm message="Are you sure you want to delete?" onCancel={back} onConfirm={remove}
    />}
  </article>
  )
};

export default Appointment;


 