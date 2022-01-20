import React from 'react';
import Button from "components/Button";

const Confirm = (props) => {
  console.log()
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">Delete the appointment?</h1>
       <section className="appointment__actions">
        <Button danger onClick={props.Cancel}>Cancel</Button> 
        <Button danger onClick={props.Confirm}>Confirm</Button> 
       </section>
    </main>
  )
};

export default Confirm;
