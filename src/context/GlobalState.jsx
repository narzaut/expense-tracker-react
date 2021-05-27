import React, { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'
    
export const GlobalContext = createContext();

export const GlobalStateProvider = (props) => {
    const [transactions, setTransactions] = useLocalStorage('transactions', [])

    return(
        <GlobalContext.Provider value = { {transactionsState: [transactions, setTransactions]} }>
            {props.children}
        </GlobalContext.Provider>
    )

}