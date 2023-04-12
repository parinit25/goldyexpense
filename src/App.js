import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import PrintExpense from "./PrintExpense";
import EditExpense from "./EditExpense";

const dummyData = [
  {
    uuid: 1,
    title: "Chilli",
    amount: 45,
    category: "Food",
    date: new Date("January 11, 2023"),
  },
  {
    uuid: 2,
    title: "Taxi",
    amount: 4500,
    category: "Fare",
    date: new Date("March 12, 2023"),
  },
  {
    uuid: 3,
    title: "RRR",
    amount: 15000,
    category: "Movies",
    date: new Date("July 13, 2023"),
  },
  {
    uuid: 4,
    title: "Tour",
    amount: 150000,
    category: "Others",
    date: new Date("August 14, 2023"),
  },
];

function App() {
  const [data, setData] = useState(dummyData);
  const [edit, setEdit] = useState(false);

  const expenseHandler = (expenseData) => {
    setData([...data, expenseData]);
  };

  const deleteExpense = (uuid) => {
    const deletedata = data.filter((item) => item.uuid !== uuid);
    setData(deletedata);
  };
  const editExpense = (uuid) => {
    const editData = data.find((item) => item.uuid === uuid);
    setEdit(editData);
  };
  const updateExpense = (updateData) => {
    const newData = [...data];
    const expenseIdx = newData.findIndex(
      (item) => item.uuid === updateData.uuid
    );
    newData[expenseIdx] = updateData;
    setData(newData);
  };

  return (
    <div>
      <ExpenseForm expenseHandler={expenseHandler} />
      <PrintExpense
        data={data}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
      />
      {edit && <EditExpense edit={edit} updateExpense={updateExpense} />}
    </div>
  );
}

export default App;
