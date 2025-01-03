const { createContext, useState } = require("react");

export const modes = createContext("saurab");

export function ModesProvider({ children }) {
  const [applyDark, setApplyDark] = useState(
    JSON.parse(localStorage.getItem("isDarkApplied"))
  );

  return (
    <modes.Provider value={[applyDark, setApplyDark]}>
      {children}
    </modes.Provider>
  );
}
