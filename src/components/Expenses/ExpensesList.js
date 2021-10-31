import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
  
    let expensesContent = <p>There are no expenses found!</p>;
    
    if(props.expenses.length===0){
       return <h2 className="expenses-list__fallback">{expensesContent}</h2>
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map( x => (
            <ExpenseItem
                key={x.id}
                title={x.title}
                amount={x.amount}
                date={x.date}
            />))}
        </ul>
      );
  }
  
  export default ExpensesList;
