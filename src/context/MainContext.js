import React, { createContext, useState } from "react";

export const MainContext = createContext();

function MainContextProvider({ children }) {
  const [dataList, setDataList] = useState("Hello");
  const [userData, setUserData] = useState({});
  const [toggle, setToggle] = useState(false);

  return (
    <MainContext.Provider
      value={{
        dataList,
        setDataList,
        userData,
        setUserData,
        toggle,
        setToggle,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextProvider;
