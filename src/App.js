import React from 'react';
import Calculate from './containers/Calculate/Calculate';
import Calculate2 from './containers/Calculate/Calculate2';
import Result from './containers/Result/Result';
import './App.scss';

const testState = 3;

function App() {
  return (
    <div className="App">
      {testState === 1 && <Calculate /> }
      {testState === 2 && <Calculate2 /> }
      {testState === 3 && <Result /> }
    </div>
  );
}

export default App;
