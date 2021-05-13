import React, {useState, createContext} from 'react';

export const GlobalContext = createContext();

export const TransactionsProvider = (props) => {
    const [transactions, setTransactions] = useState([

    ])

    return(
        <GlobalContext.Provider value = {[transactions, setTransactions]}>
            {props.children}
        </GlobalContext.Provider>
    )

}