import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'
import ShowAllButton from './ShowAllButton';
import TransactionsList from './TransactionsList'

export const HistoryList = () => {
  const { transactionsState } = useContext(GlobalContext)
  const [transactions, setTransactions] = transactionsState;
  const listLimit = 3

    return (
      <>
        <h3>Transactions history</h3>
        <hr></hr>
        {transactions.length == 0 ? <span>History log is empty.<br/>No transactions found.</span>: <TransactionsList limit = {listLimit}/>}
        {transactions.length > listLimit ? <ShowAllButton/> : ''}
      </>
    )

}

