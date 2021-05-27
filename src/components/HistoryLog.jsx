import React from 'react'
import TransactionsList from './TransactionsList';
import { useHistory } from 'react-router-dom'

export const HistoryLog = () => {
  const history = useHistory()
  
  return (
        <>
            <div className = 'container container-log'>
                <div className = 'log-header '>
                    <div className = 'arrow arrow--left' onClick = { () => history.push('/') }> </div>
                    <h3 className='center-div'> Transactions history </h3> 
                </div>
                <hr></hr>
                <TransactionsList />
            </div>

        </>
    )
}

