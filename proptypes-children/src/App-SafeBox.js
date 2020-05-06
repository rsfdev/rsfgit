import React from 'react';
import './App.css';
import SafeBox from './SafeBox'

function App() {
  return (
    <div className="App">
      <SafeBox userPassword="123">
        <img
          src="https://f.jwwb.nl/public/s/c/w/temp-mozdoqoyjvjdwsgkkoxn/treasure_chest_312572-2.jpg"
          alt="My awesome chest filled with gold"
        />
      </SafeBox>
    </div>
  );
}

export default App;
