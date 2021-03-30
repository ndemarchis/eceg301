import './App.css';
import LandingScreen from './comps/LandingScreen';
import DataDisplay from './comps/DataDisplay';

import { useState } from 'react-dom';

function App() {

  const [dataGotten, setDataGotten] = useState(false);

  return (
    <div className="App">
      <LandingScreen />
      <DataDisplay />
    </div>
  );
}

export default App;