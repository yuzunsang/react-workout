// useState hook을 import
import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // 배열 구조 분해 할당
  // 첫째 argument : current state
  // 둘째 argument : updated state
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React.");

  // handler
  const handleButtonClick = () => {
    setTitle("Updated!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      {/* made "button" to practice events and states */}
      <button onClick={handleButtonClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
