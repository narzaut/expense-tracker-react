import React from 'react';

const History = (props) => {
    return (
        <div className= 'history-item'>
            <div className='transaction-text'>{props.description}asd</div>
            <div className='transaction-amount'>{props.amount}asd</div>
        </div>
    )
    
}

export default History