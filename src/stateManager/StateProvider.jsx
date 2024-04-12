// DataContext.js
import React, { createContext, useState } from "react";
import { fetchProfile } from "./api"; // Assuming these are API functions to fetch data

export const DataContext = createContext({});
export const StateProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const webIndex = async () => {
    try {
      const data = await fetchProfile();
      setProfile(data);
      return data;
    } catch (error) {
      return null;
    }
  };

  const states = {
    profile,
  };
  const apis = {
    webIndex,
  };
  return (
    <DataContext.Provider value={{ states, apis }}>
      {children}
    </DataContext.Provider>
  );
};
