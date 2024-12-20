import React, { useContext } from "react";
import RadioButton from "./RadioButton";
import { slots } from "../data";
import "../styles/timeShedule.css";
import BsContext from "../Context/BsContext";

const TimeShedule = () => {
  const context = useContext(BsContext);

  // Getting time and change changeTime components from the context.
  const { time, changeTime } = context;

  const handleChangeTimeOnSubmit = (value) => {
    changeTime(value);

    //setting slot in localstorage
    window.localStorage.setItem("slot", value);
  };

  return (
    <>
      <div className="Slot_container">
        <h1 className="TS_heading">Select a Schedule :-</h1>
        <div className="TS_main_container">
          {slots.map((el, index) => {
            return (
              <RadioButton
                text={el}
                changeSelection={handleChangeTimeOnSubmit}
                data={time}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeShedule;
