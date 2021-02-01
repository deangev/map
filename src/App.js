import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [location, setLocation] = useState({
    country: '',
    city: '',
    region: ''
  })

  useEffect(() => {
    const getLocation = async () => {
      const locationData = await axios.get('https://api.ipdata.co/?api-key=dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e', {
        headers: {'Accept': 'application/json'}
      })
      console.log(locationData.data);
      const city = locationData.data.city
      setLocation({
        country: locationData.data.country_name,
        city,
        region: locationData.data.region_code
      })
    }
    getLocation()
  }, [])



  return (
    <div className="App">
      <div className="details" style={{padding: '1rem'}}>
        <h1>{`${location.city}, ${location.country}`}</h1>
      </div>
      <iframe title="map" width={'100%'} height={'100vh'} frameBorder={0} style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk&q=Space+Needle,${location.city.split(' ').join('+')}+${location.country}`} allowFullScreen>
      </iframe>
    </div>
  );
}

export default App;
