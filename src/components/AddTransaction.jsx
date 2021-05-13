import React, {useState, useContext} from 'react';
import {GlobalContext} from './context/GlobalState'

function guidGenerator() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

const AddTransaction= (props) => {
  
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(undefined);
  const [transactions, setTransactions] = useContext(GlobalContext);

  const addTransaction = event => {
    event.preventDefault()
    setTransactions(prevTransactions => [...prevTransactions, {
      description: description,
      amount: parseFloat(amount),
      id: guidGenerator()
    }])
    setDescription('')
    setAmount('')  
  }
  
  return (
    <>
      <h3>Add new transaction</h3>
      <hr className='style-one'></hr>
      <div className='form-control'>
        <label htmlFor='text'>Text</label>
        <input type='text' value={description} onChange={event => setDescription(event.target.value)} placeholder='Enter text'></input>
      </div>
      <div className='form-control'>
        <label htmlFor='amount'>Amount <br /> (negative - expense, positive - income) </label>
        <input type = 'number' value = {amount} onChange={event => setAmount(event.target.value)} placeholder='Enter amount'></input>
      </div>
      <button className='btn' onClick = {(amount != 0 && description != '' && amount != undefined)? addTransaction : ''} id='addBtn'>Add transaction</button>
    </>
  )
}

export default AddTransaction