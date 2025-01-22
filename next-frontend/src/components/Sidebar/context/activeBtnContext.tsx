import React, { createContext, useState, useContext } from 'react';

export const ActiveButtonContext = createContext<{ 
  activeButton: number; 
  setActiveButton: React.Dispatch<React.SetStateAction<number>>; 
}>({ activeButton: 0, setActiveButton: () => {} }); // Provide default values

export const ActiveButtonProvider = ({ children }) => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <ActiveButtonContext.Provider value={{ activeButton, setActiveButton }}>
      {children}
    </ActiveButtonContext.Provider>
  );
};

export const useActiveButton = () => {
  return useContext(ActiveButtonContext);
};