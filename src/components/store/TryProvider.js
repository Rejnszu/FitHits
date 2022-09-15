import { useState } from "react";
import TryContext from "./try-context";

const TryProvider = (props) => {
  const [testing, setTesting] = useState(true);
  function testTrue() {
    setTesting(true);
  }
  function testFalse() {
    setTesting(false);
  }
  const tryContext = {
    isTesting: testing,
    true: testTrue,
    false: testFalse,
  };

  return (
    <TryContext.Provider value={tryContext}>
      {props.children}
    </TryContext.Provider>
  );
};

export default TryProvider;
