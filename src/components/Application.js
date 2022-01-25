import React, { useState , useEffect} from "react";

import DayList from "components/DayList";
import "components/Application.scss";
import Appointment from "components/Appointment";
import axios from "axios";
import { 
  getAppointmentsForDay, 
  getInterview, 
  getInterviewersForDay 
}  from "helpers/selectors";


export default function Application(props) {
  
  // define state
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
      
  });

  // Bool interview
  function bookInterview(id, interview) {
    // console.log("!!!!!!$$$$$$", id, interview);
     const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    setState({
      ...state,
      appointments
    });

    return  axios.put(`/api/appointments/${id}`, appointment)
    .then((res) =>{ setState((prev) =>({ ...prev, appointments}))   
    })
    .catch(err =>{
      console.log(err.message);
    });
  }

  // Cancel interview
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    setState({
      ...state,
      appointments
    });

    return axios.delete(`/api/appointments/${id}`)
    .then(() =>{ 
      setState((prev) =>({ ...prev, appointments}))
    })
    .catch(err =>{
      console.log(err.message);
    });
  }


  // invoking helper function that returns array of appoinments
  let dailyAppointments = getAppointmentsForDay(state, state.day);
  let dailyInterviewers = getInterviewersForDay(state, state.day);
  
  
  //Loopover each appoinment and display each appoinment on specific day
  const schedule = dailyAppointments.map((appointment) => {
  const interview = getInterview(state, appointment.interview);
  
  return (
    <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={dailyInterviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    
    );
    
  });

  // Implement setDay fun which set specific day for appoinments
  const setDay = day => setState({ ...state, day });

// Fetching data using axios get request and useEffect with promises
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      setState(prev => ({
        ...prev, 
        days: all[0].data, 
        appointments: all[1].data, 
        interviewers:all[2].data
      }));

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
        { schedule }
      </section>
    </main>
  );
}
