import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = ({ expenses }) => {
  if (!expenses.length)
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  return (
    <ul className="expenses-list">
      {expenses.map(({ id, title, amount, date }) => {
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
