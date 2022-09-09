import React from "react";
import "./ExpenseDateItem.css";

const ExpenseDateItem = (props) => {
  const month = props.expenseDate.toLocaleString("hr-HR", { month: "long" });
  const day = props.expenseDate.toLocaleString("hr-HR", { month: "2-digit" });
  const year = props.expenseDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDateItem;
