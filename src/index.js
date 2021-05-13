import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import HistoryLog from './components/HistoryLog'
import reportWebVitals from './reportWebVitals';
import {TransactionsProvider} from './components/context/GlobalState'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

ReactDOM.render(
  <TransactionsProvider>
    <Router>
      <Route path='/' exact component = {App} />
      <Route path='/log' component = {HistoryLog} /> 
    </Router>
  </TransactionsProvider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
