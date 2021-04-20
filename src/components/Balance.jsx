import React from 'react';

const Balance = (props) => {
    return (
        <>
            <div className='balance-container'>
              <div className='balance-box'>
                <div className='balance-text'>My Balance</div>
                <div className='balance'>$xxx</div>
              </div>
            </div>
            <div className='income-container'>
              <div className='income-box'>
                <div className='income-text'>Income text</div>
                <div className='income'>INCOME</div>
              </div>
              <div className='expenses-box'>
                <div className='expenses-text'>Expenses text</div>
                <div className='expenses'>EXPENSES</div>
              </div>
            </div>
        </>
    )
    
}

export default Balance