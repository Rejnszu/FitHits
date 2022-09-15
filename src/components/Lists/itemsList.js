import React from "react";
import styles from "./itemsList.module.css";

const ItemsList = (props) => {
  const wrapperStyles = {
    display: "flex",
    justifyContent: "space-between",
    border: "2px solid purple",
    margin: "0.5rem auto",
    borderRadius: "10px",
  };
  const textStyles = {
    fontWeight: 600,
    color: "purple",
    fontSize: "clamp(0.6rem, 3vw, 1rem)",
    margin: "1rem 0.5rem",
  };
  const buttonStyles = {
    display: "block",
    margin: "auto 0.5rem",
    borderRadius: "var(--border-radius)",
    border: "2px solid purple",
    fontWeight: 600,
    color: "purple",
    padding: "0.4rem",
    cursor: "pointer",
  };
  return (
    <React.Fragment>
      {props.itemList.map((el, i) => {
        return (
          <div key={i} id={el.id} style={wrapperStyles}>
            <p style={textStyles}>{el.name}</p>

            <p style={textStyles}>{el.calories} Calories</p>
            <button
              onClick={props.removeItem.bind(null, el.id)}
              style={buttonStyles}
            >
              X
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};
export default ItemsList;
