import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDateItem from "./ExpenseDateItem";

const ExpenseItem = (props) => {
  return (
    <Card id={props.id} className="expense-item">
      <ExpenseDateItem expenseDate={props.expenseDate}></ExpenseDateItem>
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
        <div className="expense-item__price">${props.expenseAmount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
