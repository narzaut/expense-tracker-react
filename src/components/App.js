import React, {useState} from 'react';
import Title from './Title';
import Balance from './Balance';
import HistoryList from './HistoryList'
import AddTransaction from './AddTransaction'
import History from './History'
function App() {

  return (
    <div className = 'container'>
      <div className = 'app-container'>
        <Title />
        <Balance />
        <HistoryList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
