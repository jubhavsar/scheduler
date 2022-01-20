import React from 'react';
import "components/InterviewerList.scss";
import InterviewerListItem from 'components/InterviewerListItem';

const InterviewerList = (props) => {

  const interviewers = props.interviewers.map((interviewer) => {
    // const onChange = (id) => props.setInterviewer(id);
    // const value = props.interviewer;
    return (
      // ***** New one
      //     <InterviewerListItem 
      // key={interviewer.id}
      // name={interviewer.name}
      // avatar={interviewer.avatar}
      // selected={interviewer.id === value}
      // setInterviewer={() => onChange(interviewer.id)}    
      // />
      
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={() => props.setInterviewer(interviewer.id)}
      />
    );
  });
  return( 
      <section className="interviewers" >
          <h4 className="interviewers__header text--light" > </h4>
          <ul className="interviewers__list">
            { interviewers }
          </ul>
      </section>
  )
};

export default InterviewerList;
