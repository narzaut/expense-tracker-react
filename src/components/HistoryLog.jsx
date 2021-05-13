import React from 'react'
import TransactionsList from './TransactionsList';
import {useHistory} from 'react-router-dom'

const HistoryLog = () => {
  const history = useHistory()
  return (
        <>
            <div className = 'container container-log'>
                <div className = 'log-header '>
                    <h3 className='center-div'>Transactions history</h3>
                    <div className = 'arrow arrow--left' onClick = {() => history.push('/')}> </div>
                </div>
                <hr></hr>
                <TransactionsList />
            </div>

        </>
    )
}

export default HistoryLog