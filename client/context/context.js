import React, { createContext, useState } from "react";
export const Context_Token = createContext();

function Context({ children }) {
  const [cookieData, setCookieData] = useState();

  return (
    <Context_Token.Provider value={{ cookieData, setCookieData }}>
      {children}
    </Context_Token.Provider>
  );
}

export default Context;
