import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { idGenerator } from '../helpers/idGenerator'


export const AddTransaction= (props) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(undefined);
  const { transactionsState } = useContext(GlobalContext)
  const [transactions, setTransactions] = transactionsState;

  const addTransaction = event => {
    event.preventDefault()
    setTransactions(prevTransactions => [...prevTransactions, {
      description: description,
      amount: parseFloat(amount),
      id: idGenerator()
    }])
    setDescription('')
    setAmount('')  
  }
  
  const handleEnter = evt => {
    if (evt.key === 'Enter'){
      evt.preventDefault();
      return (amount != 0 && description != '' && amount != undefined) ? addTransaction(evt) : ''
    }
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <hr className='style-one'></hr>
      <div className='form-control'>
        <label htmlFor='text'>Description</label>
        <input type='text' value={ description } onChange={ event => setDescription(event.target.value) } placeholder='Enter transaction description'></input>
      </div>
      <div className='form-control'>
        <label htmlFor='amount'>Amount <br /> (negative - expense, positive - income) </label>
        <input onKeyPress={ evt => handleEnter(evt) } type = 'number' value = { amount } onChange={ event => setAmount(event.target.value) } placeholder='Enter transaction amount'></input>
      </div>
      <button className='btn' onClick = { (amount != 0 && description != '' && amount != undefined)? addTransaction : '' } id='addBtn'>Add transaction</button>
    </>
  )
}

