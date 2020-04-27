import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculate from './containers/Calculate/Calculate';
import Result from './containers/Result/Result';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Calculate} />
          <Route path='/calculate' component={Calculate} />
          <Route path='/result' component={Result} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
