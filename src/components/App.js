import React from 'react';
import Title from './Title';
import Balance from './Balance';
import HistoryList from './HistoryList'
import AddTransaction from './AddTransaction'


function App() {
  const title = 'Expense Tracker'
  return (
      <>
        <Title title = {title}/>
        <div className = 'container'>
          <Balance />
          <HistoryList />
          <AddTransaction />
        </div>
      </>
  );
}

export default App;
