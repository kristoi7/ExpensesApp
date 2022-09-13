import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDateItem from "./ExpenseDateItem";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expenseTitle);

  // const buttonClickHandler = () => {
  //   setTitle("Nesto");
  // };

  return (
    <li>
      <Card id={props.id} className="expense-item">
        <ExpenseDateItem expenseDate={props.expenseDate}></ExpenseDateItem>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.expenseAmount}</div>
        </div>
        {/* <button onClick={buttonClickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
