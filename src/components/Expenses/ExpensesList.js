import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(props) {
  let expensesContent = <p className="expenses-list__fallback">No data</p>;
  if (props.expenses.length) {
    return (
      <ul className="expenses-list">
        {
          (expensesContent = props.expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              expenseDate={expense.date}
              expenseTitle={expense.title}
              expenseAmount={expense.amount}
            />
          )))
        }
      </ul>
    );
  } else return <h2 className="expenses-list__fallback">No data</h2>;
}

export default ExpensesList;
