import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

export const Balance = (props) => {
  const { transactionsState } = useContext(GlobalContext)
  const [transactions, setTransactions] = transactionsState;
  
  const amounts = transactions.map ( transaction => transaction.amount) 
  const income = amounts.filter(item => item > 0).reduce((a, b) => a+b, 0)
  const expense = amounts.filter(item => item < 0).reduce((a, b) => a+b, 0)
  const balance = amounts.reduce((a,b) => a + b, 0)

  return (
    <>
        <div>
          <div>
            <h4>My Balance</h4>
            <h1>${balance.toFixed(2)}</h1>
          </div>
        </div>
        <div className='inc-exp-container '>
          <div>
            <h4>Income</h4>
            <p className="money plus">${income.toFixed(2)}</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p className="money minus">-${Math.abs(expense).toFixed(2)}</p>
          </div>
        </div>
    </>
  )
    
}

