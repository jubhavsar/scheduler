import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "index.scss";
import Button from "components/Button";
import DayListItem from "components/DayListItem";
import DayList from "components/DayList";
import InterviewerListItem from "components/InterviewerListItem";
import InterviewerList from "components/InterviewerList";
import Appointment from "components/Appointment/index.js";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Confirm from "components/Appointment/Confirm";

// Stories for DayListItem component

//Initiates Storybook and registers our DayListItem component
storiesOf("DayListItem", module) 

// Provides the default background color for our component
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) 

  // To define our stories, we call add() once for each of our test states to generate a story
  .add("Unselected", () => <DayListItem name="Monday" spots={5} />) 
  .add("Selected", () => <DayListItem name="Monday" spots={5} selected />) 
  .add("Full", () => <DayListItem name="Monday" spots={0} />)
  .add("Clickable", () => (
    // action() allows us to create a callback that appears in the actions panel when clicked
    <DayListItem name="Tuesday" setDay={action("setDay")} spots={5} /> 
  ));

//Stories for Button component
storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));

  //Stories for DayList component
  const days = [
    {
      id: 1,
      name: "Monday",
      spots: 2,
    },
    {
      id: 2,
      name: "Tuesday",
      spots: 5,
    },
    {
      id: 3,
      name: "Wednesday",
      spots: 0,
    },
  ];
  
  // @@@@@ New One
  storiesOf("DayList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Monday", () => (
    <DayList days={days} value={"Monday"} onChange={action("setDay")} />
  ))
  .add("Tuesday", () => (
    <DayList days={days} value={"Tuesday"} onChange={action("setDay")} />
  ))
  .add("Wednesday", () => (
    <DayList days={days} value={"Wednesday"} onChange={action("setDay")} />
  ));
  //@@@@@ Old One 
  // storiesOf("DayList", module)
  //   .addParameters({
  //     backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  //   })
  //   .add("Monday", () => (
  //     <DayList days={days} day={"Monday"} setDay={action("setDay")} />
  //   ))
  //   .add("Tuesday", () => (
  //     <DayList days={days} day={"Tuesday"} setDay={action("setDay")} />
  //   ))
  //   .add("Wednesday", () => (
  //       <DayList days={days} day={"Wednesday"} setDay={action("setDay")} />
  //   ));

// Stories for InterviewerListItem component
const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};

storiesOf("InterviewerListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
    />
  ))
  .add("Selected", () => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected
    />
  ))
  .add("Clickable", () => (
    <InterviewerListItem
      name={interviewer.name}
      avatar={interviewer.avatar}
      setInterviewer={() => action("setInterviewer")(interviewer.id)}
    />
  ));

// stories for InterviewerList components
const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

// $$$$$$$$Old one
storiesOf("InterviewerList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Initial", () => (
    <InterviewerList
      interviewers={interviewers}
    />
  ))
  .add("Selected", () => (
    <InterviewerList
      interviewers={interviewers}
      interviewer={3}
    />
  ))
  .add("Clickable", () => (
    <InterviewerList
      interviewers={interviewers}
      setInterviewer={action("setInterviewer")}
    />
  ));

  // $$$$$$ New one 

  // storiesOf("InterviewerList", module)
  // .addParameters({
  //   backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  // })
  // .add("Initial", () => (
  //   <InterviewerList
  //     interviewers={interviewers}
  //   />
  // ))
  // .add("Selected", () => (
  //   <InterviewerList
  //     interviewers={interviewers}
  //     value={3}
  //   />
  // ))
  // .add("Clickable", () => (
  //   <InterviewerList
  //     interviewers={interviewers}
  //     onChange={action("setInterviewer")}
  //   />
  // ));

  // Stories for Appoinment componenet
  storiesOf("Appointment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Appointment", () => (
   <Appointment text="No Appoinment" />
  ))
  .add("Appointment with Time", () => (
  <Appointment time="12pm" />
  ))
  .add("Header", () => (
  <Header time="12pm" />
  ))
  .add("Empty", () => (
    <Empty onAdd={action("onAdd")} />
  ))
  .add("Show", () => (
    <Show onEdit={action("onEdit")} 
          onDelete={action("onDelete")} 
          student={"Lydia Miller-Jones"} interviewer={"Sylvia Palmer"} 
          />
  ))
  .add("Confirm", () => (
      <Confirm Cancel={action("Cancel")}
    Confirm={action("Confirm")}
    />
  ))