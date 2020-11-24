import React from 'react'
import './App.css';
export const Balance = (props) => {
    return (
        <div>
            <h1>Expence Tracker</h1>
            <h3 >Your Balance</h3>
            <h1 className="money">${props.amount+props.expence}</h1>
            <div className="IncomeExpence">
               <h3>Income <br /> <span className="money_plus"> ${props.amount}</span></h3>
                <h3>Expence <br /><span className="money_minus"> ${props.expence}</span></h3>
            </div>
        </div>
    )
}
