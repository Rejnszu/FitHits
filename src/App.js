import React, { useState, useEffect } from "react";
import Wrapper from "./components/wrapper/wrapper";
import Inputs from "./components/inputs/inputs";
import AllCalories from "./components/dailyIntake/allCalories";
import UserData from "./components/userData/userData";
function App() {
  const [dailyBalance, setDailyBalance] = useState(0);
  const [intake, setIntake] = useState(0);
  const [burned, setBurned] = useState(0);
  const [dailyDemand, setDailyDemand] = useState(0);

  useEffect(() => {
    setDailyBalance(dailyDemand - intake + burned);
  }, [intake, burned, dailyDemand]);
  function getIntake(value) {
    setIntake(value);
  }
  function getBurned(value) {
    setBurned(value);
  }
  function getDailyDemand(value) {
    setDailyDemand(value);
  }

  return (
    <div>
      <h1>FitHits</h1>
      <AllCalories amount={dailyBalance} />
      <UserData getDailyDemand={getDailyDemand} />
      <Wrapper>
        <div className="flex">
          <Inputs isFood={true} getIntakeHandler={getIntake} />
          <Inputs isFood={false} getBurnedHandler={getBurned} />
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
