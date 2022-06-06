import styles from "./wrapper.module.css";
const Wrapper = (props) => {
  return (
    <div className={`${styles.wrapper} ${props.classes}`}>{props.children}</div>
  );
};

export default Wrapper;
