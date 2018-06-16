import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart  from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

  renderWeather(cityData) {
    // console.log(citydata);
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp);
    const humidity = cityData.list.map((weather) => weather.main.humidity);
    const pressure = cityData.list.map((weather) => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;

    // console.log(name, temps, humidity, pressure);
    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon}/>
        </td>
        <td>
          <Chart color="green" data={temps} unit="K" />
        </td>
        <td>
          <Chart color="green" data={humidity} unit="hPa"/>
        </td>
        <td>
          <Chart color="green" data={pressure} unit="%"/>
        </td>
      </tr>
    );
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
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

}



function mapStateToProps(state) {
  return {
    weather: state.weather
  };
  // shorten above code to below, since the key and value are identical
  // return { weather };
}

export default connect(mapStateToProps)(WeatherList);