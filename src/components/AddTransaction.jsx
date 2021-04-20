import React, {useState} from 'react';

const AddTransaction= (props) => {
 // const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  return (
    <div className='transaction-container'>
      <div className='add-transaction-text'>Add a new transaction</div>
      <hr className='style-one'></hr>
      <div className='text-input-box'>
        <div className='text'>Text</div>
        <input className='text-input' type='text'  placeholder='Enter text' onChange = {event => setDescription(event.target.value)}></input>
      </div>
      <div className='text-input-box'>
        <div className='text'>Amount</div>
        <div className='text'>(negative - expense, positive - income)</div>
        <input className='text-input' type = 'number' placeholder='Amount' onChange = {event => setAmount(event.target.value)}></input>
      </div>
      <div className='transaction-btn-box'>
        <button className='transaction-btn' onClick = {props.onAddBtnClick}>Add transaction</button>
      </div>
    </div>
  )
    
}

export default AddTransaction