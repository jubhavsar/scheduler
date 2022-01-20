import React, { useState } from 'react';
import Button from "components/Button";
import "components/InterviewerList.scss";
import InterviewerList from "components/InterviewerList";

const Form = (props) => {
// console.log("My data:", props.interviewers[2].id);
const interviewers = props.interviewers;

const [student, setStudent] = useState(props.student || "");
const [interviewer, setInterviewer] = useState(props.interviewer || null);

const reset = () => {
  setStudent("");
  setInterviewer(null);
}
const cancel = () => {
  reset();
  props.onCancel();
}
const handleSubmit = () =>{
  props.onSave(student,interviewer);
  reset();
}

return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
             className="appointment__create-input text--semi-bold"
             name="name"
             type="text"
             placeholder="Enter Student Name"
             value={student}
             onChange={(e) => setStudent(e.target.value)}
      
          />
        </form>
        <InterviewerList 
        interviewers={interviewers}
        value={interviewer}
        onChange={setInterviewer}

     />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onClick={(e) => handleSubmit(e)}>Save</Button>
      </section>
    </section>
  </main>
)
};

export default Form;
