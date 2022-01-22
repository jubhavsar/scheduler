import React from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Empty from './Empty';
import Show from './Show';
import Form from './Form'
import useVisualMode from 'hooks/useVisualMode';



//Appointment component
const Appointment = (props) => {
  // console.log("i!!!!!", props)
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  // const array = [props.interviewers]
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
  <article className="appointment">
  <Header time={props.time}/>
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show
         student={props.interview.student}
         interviewer={props.interview.interviewer}
       />
      )}
    {mode === CREATE && (
      <Form interviewers={[]} onCancel={() => back(EMPTY)} />
    )}
  </article>
  )
};

export default Appointment;


 