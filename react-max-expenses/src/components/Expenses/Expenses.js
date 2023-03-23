import { useState } from "react";
import "./Expenses.css";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import Card from "../Card/Card";

const Expenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState("All");
  const filteredExpenses = expenses.filter(
    ({ date }) =>
      filterYear === "All" || date.getFullYear().toString() === filterYear
  );

  const handleFilterChange = (yearString) => {
    setFilterYear(yearString);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        handleFilterChange={handleFilterChange}
        filterYear={filterYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
