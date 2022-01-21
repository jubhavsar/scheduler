import React from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Empty from './Empty';
import Show from './Show';

const Appointment = (props) => {
  // console.log("i!!!!!", props)
  return (
  <article className="appointment">
  <Header time={props.time}/>
    {(props.interview)?<Show student={props.interview.student} 
                        interviewer={props.interview.interviewer.name}/> :<Empty />}
  </article>
  )
};

export default Appointment;
