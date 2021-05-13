import React, {useContext} from 'react';
import {GlobalContext} from './context/GlobalState'
import History from './History'

const TransactionsList = (props) => {
  const [transactions, setTransactions] = useContext(GlobalContext);
  const reversedTransactionsList = transactions.slice(0).reverse()
  
  return (
    <>
      <ul id='list' className='list'>
        {reversedTransactionsList.slice(0, props.limit).map(transaction => (
          <History key = {transaction.id} transaction = {transaction}/> 
        ))}
      </ul>
    </>
    
  )
}

export default TransactionsList