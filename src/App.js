import './App.css';
import LandingScreen from './comps/LandingScreen';
import DataDisplay from './comps/DataDisplay';

import { useState } from 'react';

function App() {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [APICalled, setAPICalled] = useState(false);

  return (
    <div className="App">
      {!formSubmitted && <LandingScreen setFormSubmitted = {setFormSubmitted} />}
      {formSubmitted && <DataDisplay dataGotten = {formSubmitted} />}
    </div>
  );
}

export default App;