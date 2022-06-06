import React, { useState } from "react";
import styles from "./inputs.module.css";
import Wrapper from "../wrapper/wrapper";
import ItemsList from "../Lists/itemsList";
import useInput from "../hooks/use-input";

const Inputs = (props) => {
  const [caloriesSum, setCaloriesSum] = useState(0);

  const {
    items,
    itemName,
    calories,
    itemNameHandler,
    caloriesHandler,
    addItem,
  } = useInput();

  const reducedCalories = items.reduce((total, item) => {
    return total + +item.calories;
  }, +calories);

  function onChangeItemName(e) {
    itemNameHandler(e.target.value);
  }
  function onChangeCalories(e) {
    caloriesHandler(e.target.value);
  }
  function formSubmit(e) {
    e.preventDefault();
    if (itemName === "" || calories === "") {
      return;
    }

    addItem(itemName, calories);
    setCaloriesSum(reducedCalories);
    if (props.isFood) {
      props.getIntakeHandler(reducedCalories);
    } else {
      props.getBurnedHandler(reducedCalories);
    }
    itemNameHandler("");
    caloriesHandler("");
  }

  return (
    <div>
      <p className={styles["form__calories-sum"]}>
        {caloriesSum}
        {props.isFood ? " Calories Taken" : " Calories Burnt"}
      </p>
      <form onSubmit={formSubmit}>
        <div className={styles["form__wrapper"]}>
          <div className={styles["form__input-wrapper"]}>
            <label htmlFor="food" className={styles["form__label"]}>
              {props.isFood ? "Type of food" : "Type of exercise"}
            </label>
            <input
              value={itemName}
              onChange={onChangeItemName}
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
              value={calories}
              onChange={onChangeCalories}
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
        <ItemsList itemList={items} />
      </Wrapper>
    </div>
  );
};
export default Inputs;
