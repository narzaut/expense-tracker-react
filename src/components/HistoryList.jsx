import React, {useState} from 'react';
import History from './History'

const HistoryList = (props) => {

  
  
  return (
        <div className='list'>
            <h3>History</h3>
            <hr className='style-one'></hr>
            <ul id='list' className='list'>
              <li className='minus'>
                Cash <span>-$400</span><button className='delete-btn'>x</button>
              </li>
            </ul>

        </div>
    )
    
}

export default HistoryList