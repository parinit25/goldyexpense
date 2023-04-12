import React, { useState } from "react";

const EditExpense = (props) => {
  const toBeEdited = props.edit;
  console.log(toBeEdited);

  const [titles, setTitles] = useState(toBeEdited.title);
  const [amounts, setAmounts] = useState(toBeEdited.amount);
  const [categories, setCategories] = useState(toBeEdited.category);
  const [dates, setDates] = useState(toBeEdited.date);

  const updateHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      uuid: toBeEdited.uuid,
      title: titles,
      amount: amounts,
      category: categories,
      date: dates,
    };
    props.updateExpense(expenseData);
  };

  return (
    <div>
      <h3>Edit Expenses</h3>
      <form onSubmit={updateHandler}>
        <label>Expense Title:- </label>
        <input
          type="text"
          value={titles}
          onChange={(e) => setTitles(e.target.value)}
        />
        <label>Expense Amount:- </label>
        <input
          type="number"
          value={amounts}
          onChange={(e) => setAmounts(e.target.value)}
        />
        <label htmlFor="category">Expense Category:- </label>
        <select
          id="category"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        >
          <option disabled>Choose a Category</option>
          <option value="food">Food</option>
          <option value="rent">Rent</option>
          <option value="movies">Movies</option>
          <option value="fare">Fare</option>
          <option value="others">Others</option>
        </select>

        <label>Expense Date:- </label>
        <input
          type="date"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
        />
        <button>Update Expense</button>
      </form>
    </div>
  );
};

export default EditExpense;
