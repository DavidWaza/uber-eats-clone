import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
    width: '98%',
    height: '100%',
    margin: 'auto',
};

const spaces = {
  marginLeft:10,
  marginTop:40,
}

function GoogleMaps(props) {
  return (
  <div>
      <h1 className='subtext' style={spaces}>Cities near me</h1>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter = {
          {
            lat: 9.072264,
            lng: 7.491302
          }
        }
      />
  </div>
  );
}

export default GoogleApiWrapper((props) =>({
    apiKey: props.apiKey
  }))(GoogleMaps);
