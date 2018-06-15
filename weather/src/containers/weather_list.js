import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityDate) {
    return
    (
      <tr>
        <td>
          {cityDate.list}
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>temprature</th>
            <th>humidity</th>
            <th>pressure</th>
          </tr>
        </thead>
        <tbody>
          {this.state.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}



function mapStateToProps(weather) {
  // return {
  //   weather: state.weather
  // };  
  // shorten above code to below, since the key and value are identical
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);