import styles from "./allCalories.module.css";

const AllCalories = (props) => {
  return (
    <p className={styles["calories-display"]}>Calories left: {props.amount}</p>
  );
};

export default AllCalories;
