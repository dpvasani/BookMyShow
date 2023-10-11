import React, { useContext } from "react";
import RadioButton from "./RadioButton";
import { moviesList } from "../data";
import BsContext from "../Context/BsContext";
import "../styles/selectMovie.css";

const SelectMovieButton = () => {
  const context = useContext(BsContext);

  // Getting movie and change movie components from the context.
  const { movie, changeMovie } = context;

  const handleChangeMovie = (value) => {
    changeMovie(value);

    //setting movie in localstorage
    window.localStorage.setItem("movie", value);
  };

  return (
    <>
      <h1 className="SM_heading">Select a Movie :-</h1>
      <div className="SM_main_container">
        {moviesList.map((el, index) => {
          return (
            <RadioButton
              text={el}
              changeSelection={handleChangeMovie}
              data={movie}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default SelectMovieButton;
