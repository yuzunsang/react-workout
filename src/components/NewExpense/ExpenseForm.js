import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // state
  // event.target.value 값은 항상 문자열로 저장되므로 초기 state는 항상 문자열이 된다.
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // handler
  const handleTitleChange = (event) => {
    // 위험한 방식 - old state로부터의 신뢰성 문제로, 잘못된 객체 정보가 복사될 수 있다.
    // 단일 객체 수정 코드만 작성하면 다른 객체 정보가 날아가므로, 그 대신 spread operator로 기존 userInput값을 복사해온다.
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // 추천 방식 - 항상 최신 state로부터 객체 정보를 가져올 수 있다.
    // 이 함수 format을 기억하기
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.title };
    // });
    setEnteredTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    setEnteredAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    setEnteredDate(event.target.value);
  };

  // 공유 handler - arrow function과 연계
  //   const handleInputChange = (identifier, value) => {
  //     if (identifier === "title") {
  //       setEnteredTitle(value);
  //     } else if (identifier === "date") {
  //       setEnteredDate(value);
  //     } else {
  //       setEnteredAmount(value);
  //     }
  //   };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // 추가 시작 - 어렵다.. 복습 필수
    // 자주 나오는 스킬이므로 암기
    props.onSaveExpenseData(expenseData);
    // two-way binding
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={handleDateChange}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
