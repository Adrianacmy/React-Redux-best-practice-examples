import React from 'react';
import NewTicketForm from './NewTicketForm';
import QuestionForm from './QuestionForm';
import PropTypes from 'prop-types';


class NewTicket extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      formVisible: false
    };

    this.handleOnQuestionConfirmation = this.handleOnQuestionConfirmation.bind(this);
  }

  // handleClick(){
  // this.setState({formVisible: true});
  // console.log('current formVisible ' + this.state.formVisible);
  // }

  handleOnQuestionConfirmation(){
    this.setState({formVisible: true});
  }

 

  render(){
    let thisContent = null;
    if (this.state.formVisible){
      thisContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}/>;
    } else {
      thisContent = <QuestionForm onQuestionConfirmation={this.handleOnQuestionConfirmation}/>;
    }
    return (
      <div>
        { thisContent }
      </div>
    );
  }
}
NewTicket.propTypes = {
  onNewTicketCreation: PropTypes.func
};


export default NewTicket;
