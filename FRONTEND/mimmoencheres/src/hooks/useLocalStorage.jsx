import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      
      console.log(`Initial load - ${keyName}:`, value);
      // if (value) {
      if (value !== null && value !== "undefined") {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      console.error("Error reading localStorage", err);
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));

      console.log(`Setting ${keyName}:`, newValue);
    } catch (err) {
      console.error("Error setting localStorage", err);
    }
    setStoredValue(newValue);
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(keyName);

      console.log(`Removing ${keyName}`);
    } catch (err) {
      console.error("Error removing localStorage", err);
    }
    setStoredValue(defaultValue);
  };

  return [storedValue, setValue, removeValue];
};
