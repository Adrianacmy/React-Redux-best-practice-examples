import React from 'react';


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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({formVisible: true});
    // console.log('current formVisible ' + this.state.formVisible);
  }

  render(){
    return (
      <div>
        <p>This is about to be a new ticket</p>
        <p onClick={this.handleClick}>Click me to show a form</p>
      </div>
    );
  }
}



export default NewTicket;
