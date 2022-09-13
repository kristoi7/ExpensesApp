import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleValue, setTitleValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  //   const [inputValues, setInputValues] = useState({
  //     titleValue: "",
  //     amountValue: "",
  //     dateValue: "",
  //   });
  //   setInputValues({ ...inputValues, titleValue: e.target.value });
  //   setInputValues((previousState) => {
  //     return { ...previousState, titleValue: e.target.value };
  //   }); //--> safer way to change object because we have previous state as parameter so we are sure that we have newest values

  const titleChangeHandler = (e) => {
    setTitleValue(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmountValue(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDateValue(e.target.value);
  };
  const expenseFromSubmitHandler = (e) => {
    e.preventDefault();

    const newExpenseData = {
      title: titleValue,
      amount: +amountValue,
      date: new Date(dateValue),
    };

    setTitleValue("");
    setAmountValue("");
    setDateValue("");
    props.onSaveExpenseData(newExpenseData);
    formVisibilityHandler();
  };
  const [isFormVisible, setFormVisibility] = useState(false);
  const formVisibilityHandler = () => {
    setFormVisibility(!isFormVisible);
  };

  if (!isFormVisible) {
    return (
      <div className="new-expense__actions">
        <button type="button" onClick={formVisibilityHandler}>
          Add New Expense
        </button>
      </div>
    );
  } else {
    return (
      <form onSubmit={expenseFromSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              onChange={titleChangeHandler}
              type="text"
              value={titleValue}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={amountValue}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max={new Date().toISOString().slice(0, 10)}
              onChange={dateChangeHandler}
              value={dateValue}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={formVisibilityHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
};

export default ExpenseForm;
