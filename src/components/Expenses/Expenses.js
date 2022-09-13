import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setYear] = useState("2020");

  const changeYearHandler = (year) => {
    setYear(year);
  };

  const expenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={selectedYear}
          onYearChanged={changeYearHandler}
        />
        <ExpensesChart expenses={expenses} />
        <ExpensesList expenses={expenses} />
      </Card>
    </div>
  );
};

export default Expenses;
