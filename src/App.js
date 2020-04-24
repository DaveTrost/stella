import React from 'react';
import Header from './components/Header/Header';
import Calculate from './containers/Calculate/Calculate';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Calculate />
      <Footer />
    </div>
  );
}

export default App;
