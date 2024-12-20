import React from "react";
import "../styles/seats.css";

const SeatsInput = ({
  changeNoOfSeats,
  noOfSeat,
  changeSeats,
  seat,
  text,
  index,
}) => {
  //changing the seats according to user input
  const change_seats = (e) => {
    console.log("seat", seat);
    console.log("noOfSeat", noOfSeat);
    console.log("text", text);
    changeNoOfSeats({ ...noOfSeat, [e.target.name]: Number(e.target.value) });

    //setting seats in localsorage
    window.localStorage.setItem(
      "seats",
      JSON.stringify({
        ...noOfSeat,
        [e.target.name]: Number(e.target.value),
      })
    );
  };

  //highlighting the seat
  const handleChecked = (text) => {
    changeSeats(text);
  };

  return (
    <div
      name={text}
      className={`form-check-label seats ${
        seat === text ? "active" : "inactive"
      }`}
      id={`${index}text`}
      onClick={() => {
        handleChecked(text, index);
      }}>
      <span className={"text"}>{text}</span>
      <input
        type="number"
        className="seats-input"
        placeholder="0"
        name={text}
        min="0"
        id={`${index}input`}
        max="30"
        onChange={change_seats}
        // value={noOfSeat[text]}
      />
    </div>
  );
};

export default SeatsInput;
