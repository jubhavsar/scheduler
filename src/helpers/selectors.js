
function getAppointmentsForDay(state, day) {
   
  let dayObject = state.days.find(dayElem => dayElem.name === day);

  
  if(!dayObject){
    return [];
  }

  let appointments = dayObject.appointments.map((appointment) => {
    let appointmentList = state.appointments[appointment];
    return appointmentList;
  })
  // console.log("app", appointments)

  return appointments;

}

 function getInterview(state, interview){
  
   let interviewObject;
  
   if (interview === null) {
     return null;
   } else {
     for(let key in state.interviewers){
        if(interview.interviewer === state.interviewers[key].id){
          interviewObject = {
          student:interview.student,
          interviewer:state.interviewers[key]
        };
      }
     }
   }

return interviewObject;
    
}

export { getAppointmentsForDay, getInterview }

