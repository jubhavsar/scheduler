import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.full === 0,
  });

  const formatSpots = () => {
    let str;
    
    if (props.spots > 1) {
      str = `${props.spots} spots remaining`;
    } else if (props.spots === 1) {
      str = `1 spot remaining`;
    } else if (props.spots === 0) {
      str = `no spots remaining`;
    }

    return str;
  };

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
    // <li className={dayClass} onClick={() => props.setDay(props.name)}>
    //   <h2 className="text--regular">{props.name}</h2>
    //   <h3 className="text--light">{formatSpots()}</h3>
    // </li>
  );
}
