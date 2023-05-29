import React, { createContext, useState } from 'react';

// Create a new context
export const SessionContext = createContext();

// Create a provider component that will wrap your app
export const SessionProvider = ({ children }) => {
  const [sessionID, setSessionID] = useState('');

  // Function to update the session ID
  const updateSessionID = (id) => {
    setSessionID(id);
  };

  // Make the sessionID and updateSessionID available to the child components
  const contextValue = {
    sessionID,
    updateSessionID,
  };

  return (
    <SessionContext.Provider value={contextValue}>{children}</SessionContext.Provider>
  );
};