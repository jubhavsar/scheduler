import React, { useState } from 'react';
import Button from "components/Button";
import "components/InterviewerList.scss";
import InterviewerList from "components/InterviewerList";

const Form = (props) => {
const { studentName, interviewerId, interviewers, onCancel, onSave } = props;

const [student, setStudent] = useState(studentName || "");
const [interviewer, setInterviewer] = useState(interviewerId || null);
const [error, setError] = useState("");

const reset = () => {
  setStudent("");
  setInterviewer(null);
}
const cancel = () => {
  reset();
  onCancel();
}
// const handleSubmit = () =>{
//   onSave(student, interviewer);
  
//   reset();
// }

function validate() {
  if (student === "") {
    return setError("Student name cannot be blank");
    
  }
  setError("");
  onSave(student, interviewer);
}
return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
             className="appointment__create-input text--semi-bold"
             name={studentName}
             type="text"
             placeholder="Enter Student Name"
             value={student}
             onChange={(e) => setStudent(e.target.value)}
             data-testid="student-name-input"

          />
          <section className="appointment__validation">{error}</section>
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
      <Button confirm onClick={validate}>Save</Button>
      </section>
    </section>
  </main>
)
};

export default Form;
