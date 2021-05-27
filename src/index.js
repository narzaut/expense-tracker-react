import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import './styles/styles.css';
import { GlobalStateProvider } from './context/GlobalState'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);