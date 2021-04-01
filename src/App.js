import './App.css';
import LandingScreen from './comps/LandingScreen';
import DataDisplay from './comps/DataDisplay';

import { useState } from 'react';

function App() {

  const [dataGotten, setDataGotten] = useState(false);

  return (
    <div className="App">
      {dataGotten}
      <LandingScreen 
        setDataGotten = {setDataGotten}
      />
      <DataDisplay 
        dataGotten = {dataGotten}
      />
    </div>
  );
}

export default App;