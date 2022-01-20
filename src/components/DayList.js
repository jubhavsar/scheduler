import React from 'react';
import DayListItem from 'components/DayListItem';


const DayList = (props) => {
 
  const arrayOfDays = props.days;
  const parsedDayListItems = arrayOfDays.map(dayListItem => 
    { return (
      
    <ul> 
    <DayListItem
        key={dayListItem.id}  
        name={dayListItem.name} 
        selected={props.name === props.value}
        spots={dayListItem.spots} 
        setDay={props.onChange} 
    // setDay={props.setDay} 
    /></ul>)

  })
  return (
    <li>
       { parsedDayListItems }
    </li>
  )
}

export default DayList