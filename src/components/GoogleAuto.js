import React, {useState} from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";


const GoogleAutocomplete = () => {
    const [value, setValue] = useState(null);

    <GooglePlacesAutocomplete
              selectProps={{ value, onChange: setValue }}
            />
};
export default GoogleAutocomplete;
