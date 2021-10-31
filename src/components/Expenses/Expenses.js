import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import React, {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


function Expenses(props) {

  const [enteredFilter, setFilter] = useState('2021');
  const addFilterHandler = (newFilter) => {
    setFilter(newFilter);
  }
  
  const filteredExp = props.expenses.filter(x =>{return x.date.getFullYear().toString() === enteredFilter});

    return (
      <div>
        <Card className="expenses">
            <ExpensesFilter selected={enteredFilter} onChangeFilter={addFilterHandler}/>
            <ExpensesChart expenses={filteredExp}/>
            <ExpensesList expenses={filteredExp}/>
        </Card>
      </div>
    );
  }
  
  export default Expenses;