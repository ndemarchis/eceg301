import './App.css';
import LandingScreen from './comps/LandingScreen';
import DataDisplay from './comps/DataDisplay';
import LoadingScreen from './comps/LoadingScreen'

import { useState, useEffect } from 'react';

function App() {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState();
  const [dataGotten, setDataGotten] = useState(false);
  const [thingSpeakData, setThingSpeakData] = useState();

  const callAPI = () => {
    if (formSubmitted && !dataGotten) {
      fetch("https://api.thingspeak.com/channels/1331565/feeds.json?results=1000")
      .then(res => res.json())
      .then(
        (result) => {
          setThingSpeakData(result);
          setDataGotten(true);
        },
        (error) => {
          setDataGotten(true);
          alert(error);
        }
      )
    }
  }

  useEffect(callAPI, [formSubmitted])

  return (
    <div className="App">
      {!formSubmitted && <LandingScreen setFormSubmitted = {setFormSubmitted} setFormData = {setFormData} />}
      {formSubmitted && !dataGotten && <LoadingScreen />}
      {formSubmitted && dataGotten && <DataDisplay data={thingSpeakData} formData={formData} />}
    </div>
  );
}

export default App;