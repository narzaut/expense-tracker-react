import React from 'react';
import { HomeScreen } from './components/HomeScreen'
import { HistoryLog } from './components/HistoryLog'
import { HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
      <Router>
        <Switch>
          <Route path='/' exact component = { HomeScreen } />
          <Route path='/log' component = { HistoryLog } /> 
        </Switch>
      </Router>
  );
}

export default App;
