import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      uuid: uuidv4(),
      title: title,
      amount: amount,
      category: category,
      date: date,
    };
    props.expenseHandler(expenseData);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        style={{ display: "grid", gap: 5, width: "200px", margin: "auto" }}
      >
        <h1>Test Mode✌️</h1>
        <label>Expense Title:- </label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <label>Expense Amount:- </label>
        <input type="number" onChange={(e) => setAmount(e.target.value)} />
        <label htmlFor="category">Expense Category:- </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option></option>
          <option value="food">Food</option>
          <option value="rent">Rent</option>
          <option value="movies">Movies</option>
          <option value="fare">Fare</option>
          <option value="others">Others</option>
        </select>

        <label>Expense Date:- </label>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <button
          style={{
            marginTop: "15px",
            backgroundColor: "#99ff66",
            border: "none",
            padding: "8px",
            fontWeight: 700,
            borderRadius: "8px",
          }}
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
