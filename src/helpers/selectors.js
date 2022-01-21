
export default function getAppointmentsForDay(state, day) {
   
  let dayObject = state.days.find(dayElem => dayElem.name === day);
  
  if(!dayObject){
    return [];
  }

  let appointments = dayObject.appointments.map((appoinment) => {
    let appointmentList = state.appointments[appoinment];
    return appointmentList;
  })
  
  return appointments;

}
