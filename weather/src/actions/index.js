import axios from 'axios';




const API_KEY = '42c334b64e17431f427c2a2159051bcb';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FEATCH_WEATHER = 'FEATCH_WEATHER'; // in order to action type consistant

export function featchWeather(city){
  const url = `${ROOT_URL}&Q={city},us`;

  const request = axios.get(url); // return a promise

  return {
    type: FEATCH_WEATHER,
    payload: request
  };
  
}