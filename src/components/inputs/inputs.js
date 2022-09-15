import React, { useState, useRef } from "react";
import styles from "./inputs.module.css";
import Wrapper from "../wrapper/wrapper";
import ItemsList from "../Lists/itemsList";
import useInput from "../hooks/use-input";
import { useEffect } from "react";

const Inputs = (props) => {
  const [caloriesSum, setCaloriesSum] = useState(0);
  const caloriesRef = useRef(null);
  const nameRef = useRef(null);
  const { items, addItem, removeItem } = useInput();

  const reducedCalories = items.reduce((total, item) => {
    return total + +item.calories;
  }, 0);

  function addHandler(e) {
    e.preventDefault();
    if (nameRef.current.value === "" || caloriesRef.current.value === "") {
      return;
    }

    addItem(nameRef.current.value, caloriesRef.current.value);
    nameRef.current.value = "";
    caloriesRef.current.value = "";
  }

  function removeHandler(clickedId) {
    removeItem(clickedId);
  }

  useEffect(() => {
    setCaloriesSum(reducedCalories);
  }, [reducedCalories]);

  useEffect(() => {
    if (props.isFood) {
      props.getIntakeHandler(reducedCalories);
    } else {
      props.getBurnedHandler(reducedCalories);
    }
  }, [reducedCalories, props]);
  return (
    <div>
      <p className={styles["form__calories-sum"]}>
        {caloriesSum}
        {props.isFood ? " Calories Taken" : " Calories Burnt"}
      </p>
      <form onSubmit={addHandler}>
        <div className={styles["form__wrapper"]}>
          <div className={styles["form__input-wrapper"]}>
            <label htmlFor="food" className={styles["form__label"]}>
              {props.isFood ? "Type of food" : "Type of exercise"}
            </label>
            <input
              ref={nameRef}
              type="text"
              id="fod"
              className={styles["form__input"]}
            />
          </div>
          <div className={styles["form__input-wrapper"]}>
            <label htmlFor="calories" className={styles["form__label"]}>
              {props.isFood ? "Calories Intake" : "Calories Burnt"}
            </label>
            <input
              ref={caloriesRef}
              type="number"
              id="calories"
              className={styles["form__input"]}
            />
          </div>
        </div>
        <button type="submit" className={styles["form__input__button"]}>
          {props.isFood ? "Add Food" : "Add Activity"}
        </button>
      </form>
      <Wrapper classes={styles["wrapper--input"]}>
        <ItemsList itemList={items} removeItem={removeHandler} />
      </Wrapper>
    </div>
  );
};
export default Inputs;
