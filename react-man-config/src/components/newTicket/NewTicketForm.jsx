import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';


function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketSubmition(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, id: v4(), timeOpen: new Moment()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }



  return (
    <div>
      <form onSubmit={handleNewTicketSubmition}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}


NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

// class NewTicket extends React.Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       formVisible: false
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(){
//     this.setState({formVisible: true});
//     // console.log('current formVisible ' + this.state.formVisible);
//   }

//   render(){
//     let thisContent = null;
//     if(this.state.formVisible){
//       thisContent = <NewTicketForm />;
//     }else{
//       thisContent = <QuestionForm />
//     }
//     return (
//       <div>
//        { thisContent }
//       </div>
//     );
//   }
// }



export default NewTicketForm;
