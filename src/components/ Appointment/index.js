import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";

import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVE = "SAVE";
const ERROR_SAVE = "ERROR_SAVE";

export default function Appointment(props) {
  // custom hook to handle the visual modes of <Appointment> component
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

     /*
    this function is passed as prop into the form
    component and handles the visual mode to book
    interview
  */
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVE);

    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true));
  }

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={back} />
      )}
    </article>
  );
}
