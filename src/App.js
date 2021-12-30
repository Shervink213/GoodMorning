import React, { useEffect, useState } from "react";
import weatherServices from './services/weatherData';
import { Dimmer, Loader } from 'semantic-ui-react';
import Weather from './components/Weather';
import "./App.css";




function App() {
  const [data, setData] = useState([]);

  useEffect(() => {

    weatherServices
      .getWeather()
      .then(response => {
        console.log(response);
        setData(response);
      })
  }, [])

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div className="Loading">
          <Dimmer>
            <Loader>Loading...</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
}

export default App;
