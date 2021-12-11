/*
  returns array of appointment objects for the current
  selected day which will be used in Application.js
  file
*/
export const getAppointmentsForDay = (state, day) => {
  const dayObj = state.days.find((element) => element.name === day);

  if (!dayObj) {
    return [];
  }

  const appointmentIds = dayObj.appointments;

  const appointmentsForDay = [];

  for (const id in state.appointments) {
    if (appointmentIds.includes(Number(id))) {
      appointmentsForDay.push(state.appointments[id]);
    }
  }

  return appointmentsForDay;
};

/*
  returns array of interview objects for the current
  selected day which will be used in Application.js
  file
*/
export const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }

  const interviewerId = interview.interviewer;

  for (const id in state.interviewers) {
    if (Number(id) === interviewerId) {
      return {
        student: interview.student,
        interviewer: state.interviewers[id],
      };
    }
  }
};
