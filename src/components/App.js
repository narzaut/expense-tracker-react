import React, {useState} from 'react';
import Title from './Title';
import Balance from './Balance';
import HistoryList from './HistoryList'
import AddTransaction from './AddTransaction'


function App() {

  return (
    <div>
       <Title />
      <div className = 'container'>
        <Balance />
        <HistoryList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
