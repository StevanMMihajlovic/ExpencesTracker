import './ExpenseForm.css';
import React, { useState } from 'react';

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /*const [enteredInput, setEnteredInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });*/

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        /*
        setEnteredInput({
            ...enteredInput,
            enteredTitle: event.target.value
        });
        bolji nacin:
        setEnteredInput((prevState)=>{
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        });*/
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        /*
        setEnteredInput({
            ...enteredInput,
            enteredAmount: event.target.value
        });*/
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        /*
        setEnteredInput({
            ...enteredInput,
            enteredDate: event.target.value
        });*/
    };

    const submitHandler = (event) => {
        //da ne uploaduje opet stranicu
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        //output iz NewExpense
        props.onSaveExpenseData(expenseData);
        //praznjenje promenljive
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };
    
    return (
      <form onSubmit={submitHandler}>
          <div className='new-expense__controls'>
              <div className='new-expense__control'>
                  <label>Title</label>
                  <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
              </div>
              <div className='new-expense__control'>
                  <label>Amount</label>
                  <input type='number' value={enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01'/>
              </div>
              <div className='new-expense__control'>
                  <label>Date</label>
                  <input type='date' value={enteredDate} onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31'/>
              </div>
          </div>
          <div className='new-expense__actions'>
          <button type='button' onClick={props.onHideForm}>Cancel</button>
            <button type='submit'>Add Expense</button>
          </div>
      </form>
      );
    }
    
    export default ExpenseForm;