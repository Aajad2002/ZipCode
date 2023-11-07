import logo from './logo.svg';
import './App.css';
import ZipForm from './Components/ZipForm';
import Location from './Components/Location';
import { useState } from 'react';
import Navbar from './Components/Navbar';

function App() {
  const [location, setLocation] = useState(null);

  const clearLocation = () => {
    setLocation(null);
  };
  return (
    <div className="App">
      <Navbar/>
       <ZipForm onFetchLocation={setLocation}/>
       {/* <Location location={location} clearLocation={clearLocation}/> */}
    </div>
  );
}

export default App;
