import React from 'react';
import Calculate from './containers/Calculate/Calculate';
import Result from './containers/Result/Result';
import './App.scss';

const testState = 1;

function App() {
  return (
    <div className="App">
      {testState === 1 && <Calculate /> }
      {testState === 3 && <Result /> }
    </div>
  );
}

export default App;
