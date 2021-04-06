import './App.css';
import LandingScreen from './comps/LandingScreen';
import DataDisplay from './comps/DataDisplay';
import LoadingScreen from './comps/LoadingScreen'

import { useState } from 'react';

function App() {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dataGotten, setDataGotten] = useState(false);

  return (
    <div className="App">
      {!formSubmitted && <LandingScreen setFormSubmitted = {setFormSubmitted} />}
      {formSubmitted && !dataGotten && <LoadingScreen />}
      {formSubmitted && dataGotten && <DataDisplay formSubmitted = {formSubmitted} setDataGotten = {setDataGotten} />}
    </div>
  );
}

export default App;