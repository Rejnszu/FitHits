import { useRef, useState } from "react";
import styles from "./userData.module.css";
import Wrapper from "../wrapper/wrapper";
const UserData = (props) => {
  const [demand, setDemand] = useState("");
  const heightInput = useRef(null);
  const massInput = useRef(null);
  const ageInput = useRef(null);
  const gender = useRef(null);
  const activity = useRef(null);

  function getDemand() {
    if (gender.current.value === "man") {
      return (
        (66 +
          13.7 * massInput.current.value +
          5 * heightInput.current.value -
          6.8 * ageInput.current.value) *
        Number(activity.current.value)
      ).toFixed();
    } else {
      return (
        (655 +
          9.6 * massInput.current.value +
          1.8 * heightInput.current.value -
          4.7 * ageInput.current.value) *
        Number(activity.current.value)
      ).toFixed();
    }
  }

  function submitUserData(e) {
    e.preventDefault();

    if (
      massInput.current.value === "" ||
      heightInput.current.value === "" ||
      ageInput.current.value === ""
    ) {
      return;
    }

    setDemand(getDemand());
    props.getDailyDemand(getDemand());
  }

  return (
    <div className={styles.test}>
      <Wrapper classes={styles["wrapper--user-data"]}>
        <p className={styles["user__title"]}>Your body size:</p>
        <form onSubmit={submitUserData}>
          <div className="flex">
            <div className={styles["user__input-wrapper"]}>
              <label htmlFor="height" className={styles["user__input__label"]}>
                Height [cm]
              </label>
              <input
                ref={heightInput}
                id="height"
                type="number"
                className={styles["user__parameter-input"]}
              />
            </div>
            <div className={styles["user__input-wrapper"]}>
              <label htmlFor="mass" className={styles["user__input__label"]}>
                Mass [kg]
              </label>
              <input
                ref={massInput}
                id="mass"
                type="number"
                className={styles["user__parameter-input"]}
              />
            </div>
            <div className={styles["user__input-wrapper"]}>
              <label htmlFor="age" className={styles["user__input__label"]}>
                Age [years]
              </label>
              <input
                ref={ageInput}
                id="age"
                type="number"
                className={styles["user__parameter-input"]}
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <p className={styles["user__select__title"]}>Gender</p>
              <select ref={gender} className={styles["user__select"]}>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
            </div>
            <div>
              <p className={styles["user__select__title"]}>Physical Activity</p>
              <select ref={activity} className={styles["user__select"]}>
                <option value="1">None</option>
                <option value="1.2">Light</option>
                <option value="1.6">Medium</option>
                <option value="1.8">Heavy</option>
              </select>
            </div>
          </div>

          <hr />
          <button className={styles["user__button"]}>Calculate</button>
        </form>
        <div className={styles["user__demand"]}>
          <p className={styles["user__demand__text"]}>
            Daily calories requirment: {demand}
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default UserData;
