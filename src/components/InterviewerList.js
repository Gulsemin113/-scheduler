import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from "prop-types";

export default function InterviewerList(props) {
  // builds an array of interviewer list items and render
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {props.interviewers.map((interviewer) => (
          <InterviewerListItem
            key={interviewer.id}
            name={interviewer.name}
            avatar={interviewer.avatar}
            selected={interviewer.id === props.value}
            setInterviewer={(event) => props.onChange(interviewer.id)}
          />
        ))}
      </ul>
    </section>
  );
}
// prop types is restricted to only specific data types
InterviewerList.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
