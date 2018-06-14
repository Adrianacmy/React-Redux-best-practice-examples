import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreaters } from 'redux';

import featchWeather from '../actions/index';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.featchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      // by using a form to get some free funtionality
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input 
        className="form-control"
        placeholder="get a five day forcast in your city"
        value={this.state.value}
        onChange={this.onInputChange}
         />
        <span className="input-group-btn">
          <button className="btn bnt-success" type="submit">search</button>
        </span>
      </form>);
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreaters({featchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar); // null: there is no state to pass here