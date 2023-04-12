import React, { useEffect, useState } from "react";

const PrintExpense = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);

  const amountHAndler = () => {
    const amountData = expenseData.map((item) => item.amount);
    let sum = 0;
    for (let i = 0; i < amountData.length; i++) {
      sum += +amountData[i];
    }
    console.log(sum);
    setTotalAmount(sum);
  };

  useEffect(() => {
    amountHAndler();
  }, [props.data]);

  const expenseData = props.data;
  console.log(expenseData);

  const deleteHandler = (uuid) => {
    props.deleteExpense(uuid);
  };
  const editHandler = (uuid) => {
    props.editExpense(uuid);
  };

  const addText = (amount) => {
    if (amount < 1000) {
      return "minimum";
    } else if (amount > 1000 && amount < 10000) {
      return "Average";
    } else if (amount > 10000 && amount < 20000) {
      return "Above Average";
    } else {
      return "Maximum";
    }
  };
  const colorText = (amount) => {
    if (amount < 1000) {
      return "Yellow";
    } else if (amount > 1000 && amount < 10000) {
      return "Orange";
    } else if (amount > 10000 && amount < 20000) {
      return "Pink";
    } else {
      return "red";
    }
  };

  const formatDate = (date) => {
    const date1 = new Date(date);
    const dateNumber = String(date1.getDate()).padStart(2, "0");
    const month = String(date1.getMonth() + 1).padStart(2, "0");
    const year = date1.getFullYear();

    return `${dateNumber}-${month}-${year}`;
  };

  const compareDate = (currDate) => {
    const date1 = new Date(currDate);
    const dateNumber = String(date1.getDate()).padStart(2, "0");
    const monthC = String(date1.getMonth() + 1).padStart(2, "0");
    const yearC = date1.getFullYear();

    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    if (year>yearC || month>monthC || day>dateNumber) {
      return "Past Date";
    } else if (year<yearC || month<monthC || day<dateNumber) {
      return "Upcoming Date";
    } else {
      return "Present Date"
    }
  };

  const dateColor = (currDate)  =>{
    const date1 = new Date(currDate);
    const dateNumber = String(date1.getDate()).padStart(2, "0");
    const monthC = String(date1.getMonth() + 1).padStart(2, "0");
    const yearC = date1.getFullYear();

    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();


    if (year>yearC || month>monthC || day>dateNumber) {
      return "red";
    } else if (year<yearC || month<monthC || day<dateNumber) {
      return "green";
    } else {
      return "blue"
    }
  }

  return (
    <div
      style={{
        display: "grid",
        margin: "auto",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      {expenseData.length !== 0 ? (
        expenseData.map((item) => (
          <div key={item.uuid}>
            <li style={{ marginTop: "10px" }}>
              {item.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.amount}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: colorText(item.amount) }}>
                {addText(item.amount)}
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {item.category}&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{formatDate(item.date)}</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{color:dateColor(item.date)}} >{compareDate(item.date)}</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => deleteHandler(item.uuid)}>Delete</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => editHandler(item.uuid)}>Edit</button>
            </li>
          </div>
        ))
      ) : (
        <h1>No Expenses Available😒</h1>
      )}
      <h3>Total Amount:- {totalAmount}</h3>
    </div>
  );
};

export default PrintExpense;
