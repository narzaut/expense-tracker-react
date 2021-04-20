import React from 'react';

const Balance = (props) => {
    return (
        <>
            <div>
              <div>
                <h4>My Balance</h4>
                <h1 id='balance'>$0.00</h1>
              </div>
            </div>
            <div className='inc-exp-container '>
              <div>
                <h4>Income</h4>
                <p className="money plus">+$0.00</p>
              </div>
              <div>
                <h4>Expense</h4>
                <p className="money minus">-$0.00</p>
              </div>
            </div>
        </>
    )
    
}

export default Balance