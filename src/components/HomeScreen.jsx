import React from 'react'
import { Balance } from './Balance'
import { HistoryList } from './HistoryList'
import { AddTransaction } from './AddTransaction'

export const HomeScreen = () => {
  return (
    <>
      <div className = 'container'>
				<h2>Expense Tracker</h2>
        <Balance />
        <HistoryList />
        <AddTransaction />
      </div> 
    </>
    )
}
