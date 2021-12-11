import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  return (
    <ul>
      <DayListItem
        key={props.id}
        name={props.name}
        spots={props.spots}
        selected={props.name === props.value}
        setDay={props.onChange}
      />
      
    </ul>
  );
}
