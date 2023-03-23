import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleTitleChange = ({ target }) => {
    setEnteredTitle(target.value);
  };

  const handleAmountChange = ({ target }) => {
    setEnteredAmount(target.value);
  };

  const handleDateChange = ({ target }) => {
    setEnteredDate(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = `${Date.now().toString()}.${Math.random().toString()}`;
    const newExpense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      id: id,
    };

    props.handleExpenseSubmit(newExpense);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.toggleForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={handleTitleChange}
            value={enteredTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={handleDateChange}
            value={enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.toggleForm}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
