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
  }

  render(){
    return (
      <div>
        <form>
          <input 
            type='text'
            id='names'
            placeholder='pair name'/>
          <input
            type='text'
            id='location'
            placeholder='Location'/>
          <textarea
            id='issue'
            placeholder='Describe your issue.'/>
          <button type='submit'>Help!</button>
        </form>
      </div>
    );
  }
}



export default NewTicket;
