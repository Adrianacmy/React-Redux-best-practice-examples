import React from 'react';
import NewTicketForm from './NewTicketForm';
import QuestionForm from './QuestionForm';

// function NewTicket(){
//   return (
//     <div>
//       <form>
//         <input 
//           type='text'
//           id='names'
//           placeholder='pair name'/>
//         <input
//           type='text'
//           id='location'
//           placeholder='Location'/>
//         <textarea
//           id='issue'
//           placeholder='Describe your issue.'/>
//         <button type='submit'>Help!</button>
//       </form>
//     </div>


//   );
// }

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
    if(this.state.formVisible){
      thisContent = <NewTicketForm />;
    }else{
      thisContent = <QuestionForm onQuestionConfirmation={this.handleOnQuestionConfirmation}/>;
    }
    return (
      <div>
        { thisContent }
      </div>
    );
  }
}



export default NewTicket;
