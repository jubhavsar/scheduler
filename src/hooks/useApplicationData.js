import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {

// define state
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
      
  });

 // Implement setDay fun which set specific day for appoinments
  const setDay = day => setState({ ...state, day });

  // Bool interview
  function bookInterview(id, interview) {
    const appointment = {
     ...state.appointments[id],
     interview: { ...interview }
   };

   const appointments = {
     ...state.appointments,
     [id]: appointment
   };

   return  axios.put(`/api/appointments/${id}`, appointment)
   .then((res) =>{ setState((prev) =>({ ...prev, appointments}))   
   })
   .catch(err =>{
     console.log(err.message);
     throw err;
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

   return axios.delete(`/api/appointments/${id}`)
   .then(() =>{ 
     setState((prev) =>({ ...prev, appointments}))
   })
 }

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

 return { state, setDay, bookInterview, cancelInterview }
}