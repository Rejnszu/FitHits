import React from "react";
import styles from "./itemsList.module.css";

const ItemsList = (props) => {
  return (
    <React.Fragment>
      {props.itemList.map((el, i) => {
        return (
          <div key={i} className={styles["items__wrapper"]}>
            <p className={styles["items__text"]}>{el.name}</p>
            <p className={styles["items__text"]}>{el.calories} Calories</p>
          </div>
        );
      })}
    </React.Fragment>
  );
};
export default ItemsList;
