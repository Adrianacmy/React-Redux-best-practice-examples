import React from 'react';
// import { GoogleMapLoader, GoogleMap }  from "react-google-maps";



class GooglMap extends React.Component {

  componentDidMount() {
    new Google.maps.Map(this.refs.map, {// make third lib work with react
      zoom: 13,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }

    });
  }

  render() {
    return (
      <div ref="map"></div>

    );
  }

}

export default GoogleMap;

// export default GooglMap;

// export default (props) => {
//   return (
//     <GoogleMapLoader 
//       containerElement={<div style={{height:'100%'}}/> }
//       googleMapElement={
//       <GoogleMap defaultZoom={13} defaultCenter={{lat:props.lat, lng: props.lng}} /> }
//     >
//     </GoogleMapLoader>
//   );


// }