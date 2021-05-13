import React, {useContext} from 'react';
import {GlobalContext} from './context/GlobalState'
import ShowAllButton from './ShowAllButton';
import TransactionsList from './TransactionsList'

const HistoryList = () => {
  const [transactions, setTransactions] = useContext(GlobalContext);


    return (
      <>
        <h3>Transactions history</h3>
        <hr></hr>
        {transactions.length == 0 ? <span>History log is empty.<br/>No transactions found.</span>: <TransactionsList limit = {4}/>}
        {transactions.length > 4 ? <ShowAllButton/> : ''}
      </>
    )

}

export default HistoryList