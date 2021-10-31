import React, {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [toogleShow, changeShow] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        changeShow(false);
    }

    function showNewExpense(){
        changeShow(true);
    }

    function dontshowNewExpense(){
        changeShow(false);
    }

    return (
    <div className="new-expense">
        {!toogleShow && (<button onClick={showNewExpense}>Add New Expense</button>)}
        {toogleShow && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={dontshowNewExpense}></ExpenseForm>)}
    </div>);
}

export default NewExpense;