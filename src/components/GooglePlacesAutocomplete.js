import React, { useEffect, useRef, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const GooglePlacesInput = (props) => {
  console.log('Locatipns is',props.location);
  const ref = useRef();
  const [inputLocation,setInputLocation] = useState(props.location)

  useEffect(() => {
    ref.current?.setAddressText(inputLocation);
  }, [inputLocation]);

  return (
    <GooglePlacesAutocomplete
      fetchDetails={true}
      ref={ref}
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log('Placessss',data, details);
      }}
      query={{
        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
    />
  );
};

export default GooglePlacesInput;