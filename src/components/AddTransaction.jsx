import React, {useState} from 'react';

const AddTransaction= (props) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h3>Add new transation</h3>
      <hr className='style-one'></hr>
      <div className='form-control'>
        <label htmlFor='text'>Text</label>
        <input type='text' value={description} onChange={event => setDescription(event.target.value)} placeholder='Enter text'></input>
      </div>
      <div className='form-control'>
        <label htmlFor='amount'>Amount <br /> (negative - expense, positive - income) </label>
        <input type = 'number' value={amount} onChange={event => setAmount(event.target.value)} placeholder='Amount'></input>
      </div>
      <button className='btn'>Add transaction</button>
    </>
  )
    
}

export default AddTransaction