import React from 'react';
import PropTypes from 'prop-types'; 

export default function QuestionForm(props){
  return (
    <div>
      Have you tried all degug tools?
      <button onClick={props.onQuestionConfirmation}>Yes</button>
    </div>
  );
}

QuestionForm.propTypes = {
  onQuestionConfirmation: PropTypes.func
};