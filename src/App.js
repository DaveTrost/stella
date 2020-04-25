import React from 'react';
import Header from './components/Header/Header';
import Calculate from './containers/Calculate/Calculate';
import Calculate2 from './containers/Calculate/Calculate2';
import Result from './containers/Result/Result';
import Footer from './components/Footer/Footer';
import './App.scss';

const testState = 1;

function App() {
  return (
    <div className="App">
      <Header />
      {testState === 1 && <Calculate /> }
      {testState === 2 && <Calculate2 /> }
      {testState === 3 && <Result /> }
      <Footer />
    </div>
  );
}

export default App;
