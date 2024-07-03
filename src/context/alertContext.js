import React, { createContext, useContext, useState, useMemo } from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: "success",
    message: "",
  });

  const onOpen = (type, message) => {
    setState({ isOpen: true, type, message });
  };

  const onClose = () => {
    setState((prevState) => ({
      ...prevState,
      isOpen: false,
    }));
  };

  const contextValue = useMemo(() => ({ ...state, onOpen, onClose }), [state]);

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
