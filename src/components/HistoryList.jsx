import React, {useState} from 'react';
import History from './History'

const HistoryList = (props) => {

  
  
  return (
        <div className='history-container'>
            <div className = 'history-text'>History</div>
            <hr className='style-one'></hr>
            <div className = 'history-list'>
              {props.itemsList}asd
            </div>
        </div>
    )
    
}

export default HistoryList