import React, { useState , useEffect} from "react";
import DayList from "components/DayList";
import "components/Application.scss";
import Appointment from "components/Appointment";
import axios from "axios";
import getAppointmentsForDay from "helpers/selectors";


export default function Application(props) {
  
  // define state
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
      
  });

  // invoking helper function that returns array of appoinments
  let dailyAppointments = getAppointmentsForDay(state, state.day);

  //Loopover each appoinment and display each appoinment on specific day
  const parsedAppointments = dailyAppointments.map((appointment) => {
    return (
     <Appointment key={appointment.id} {...appointment} />
    );
  });

  // Implement setDay fun which set specific day for appoinments
  const setDay = day => setState({ ...state, day });

  // useEffect(() => {
  //   axios.get(`http://localhost:8001/api/days`).then(response => {
  //     const data = response.data;
  //     // setDays([...data])
  //      setDay(data[0].name)
  //   });
  // }, []);
  
// Fetching data using axios get request and useEffect with promises
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data}));
    }).catch((err) => {
      console.log(err.message);
    })
  }, []);
 

  return (
    <main className="layout">
      <section className="sidebar">
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList  days={state.days}  value={state.day}  onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        { parsedAppointments }
      </section>
    </main>
  );
}
