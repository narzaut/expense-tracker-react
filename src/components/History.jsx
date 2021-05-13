import React, {useContext} from 'react';
import { GlobalContext } from './context/GlobalState';

const History = (props) => {
    const sign = props.transaction.amount < 0 ? '-' : '+';
    const [transactions, setTransactions] = useContext(GlobalContext)
    const deleteTransaction = (transaction) => {
        setTransactions(transactions.filter(transaction => transaction.id != props.transaction.id))
    }

    return (
        <li className={props.transaction.amount > 0 ? 'plus' : 'minus'}>
            {props.transaction.description} <span>{sign}${Math.abs(props.transaction.amount)}</span><button className='delete-btn' onClick = {deleteTransaction}>x</button>
        </li>  
    )
    
}

export default History