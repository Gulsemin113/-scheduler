import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });

  // message is returned according to the spots available
  const formatSpots = (numberOfSpots) => {
    switch (numberOfSpots) {
      case 0:
        return "no spots remaining";
      case 1:
        return "1 spot remaining";
      default:
        return `${numberOfSpots} spots remaining`;
    }
  };

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
