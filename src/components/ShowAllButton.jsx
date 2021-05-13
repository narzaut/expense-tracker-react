import React from 'react';
import {useHistory} from 'react-router-dom'


const ShowAllButton = (props) => {
    const history = useHistory();
    return (
        <div className= 'center-div'>
            <button
                className = 'btn btn-show-transactions'
                onClick = {() => history.push('/log')}
            >
                SHOW ALL TRANSACTIONS
            </button>
        </div>
    )
    
}

export default ShowAllButton