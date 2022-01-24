import React from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Empty from './Empty';
import Show from './Show';
import Form from './Form'
import useVisualMode from 'hooks/useVisualMode';
import Status from './Status';
import { getInterview } from 'helpers/selectors';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
//Appointment component
const Appointment = (props) => {
  console.log("i!!!!!", props)
  
  // const array = [props.interviewers]
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    setTimeout(()=>{
        props.bookInterview(props.id, interview);
        transition(SHOW);
    },5000)
    
   
  }

  function getIntervierName(id){
    const interviewerInfo = props.interviewers.filter((value) => value.id === id)
    console.log("inter::::", interviewerInfo);
    return interviewerInfo[0].name;
  }

console.log("%%%%%%%", props)
  return (
  <article className="appointment">
  <Header time={props.time}/>
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show student={props.interview.student } interviewer={getIntervierName(props.interview.interviewer)} />
      )}
    {mode === CREATE && (
      <Form interviewers={Object.values(props.interviewers)} onCancel={() => back(EMPTY)} onSave={save}/>
    )}
    {mode === SAVING && <Status message="Saving" />}
  </article>
  )
};

export default Appointment;


 