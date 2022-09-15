import React from "react";

const TryContext = React.createContext({
  isTesting: true,
  true: () => {},
  false: () => {},
});

export default TryContext;
