import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prevFromState) => !prevFromState);
  };

  const newExpenseContent = showForm ? (
    <ExpenseForm
      handleExpenseSubmit={props.handleExpenseSubmit}
      toggleForm={toggleForm}
    />
  ) : (
    <button onClick={toggleForm}>Add new expense</button>
  );
  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
