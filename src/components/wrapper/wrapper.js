import styles from "./wrapper.module.css";
const Wrapper = (props) => {
  const classes = `${styles.wrapper} ${props.classes}`;
  return <div className={classes}>{props.children}</div>;
};

export default Wrapper;
