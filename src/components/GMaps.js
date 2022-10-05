import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React, { useState } from 'react';

const containerStyle = {
    width: '300px',
    height: '200px'
};



function GMaps(props) {
    const [cordinates, setCoord] = useState({});
    const {lat1,long1,lat2,long2} = props.coord
    console.log('Coord are',{lat1,long1,lat2,long2});
    const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries:['places']
  })

  const center = {
    lat: lat1,
    lng: long1
  };

  const center2 = {lat:lat2, lng:long2}

  

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={{ mapTypeControl: false, zoomControl:false }}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
    <Marker
      position={center}
    />
    <Marker
      position={center}
    />
      </GoogleMap>
  ) : <></>
}

export default (GMaps)