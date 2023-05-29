import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

// Create a new context
export const SessionContext = createContext();

// Create a provider component that will wrap your app
export const SessionProvider = ({ children }) => {
  const [sessionID, setSessionID] = useState('');

  // Function to update the session ID
  const updateSessionID = (id) => {
    setSessionID(id);
  };

  // Check for stored session ID on component mount
  useEffect(() => {
    const storedSessionID = Cookies.get('sessionID');
    if (storedSessionID) {
      setSessionID(storedSessionID);
    }
  }, []);

  // Update stored session ID when it changes
  useEffect(() => {
    if (sessionID) {
      Cookies.set('sessionID', sessionID);
    } else {
      Cookies.remove('sessionID');
    }
  }, [sessionID]);

  // Make the sessionID and updateSessionID available to the child components
  const contextValue = {
    sessionID,
    updateSessionID,
  };

  return (
    <SessionContext.Provider value={contextValue}>{children}</SessionContext.Provider>
  );
};