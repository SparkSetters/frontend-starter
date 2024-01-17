import { useState } from 'react';
export const useLocalStorage = () => {
  const [value, setValue] = useState<string | null>(null);

  const setItem = (key: string, value: string) => {
    if (localStorage) {
      localStorage.setItem(key, value);
      setValue(value);
    }
  };

  const getItem = (key: string) => {
    if (localStorage) {
      const retrievedValue = localStorage.getItem(key);
      setValue(retrievedValue);
      return retrievedValue;
    }
  };

  const removeItem = (key: string) => {
    if (localStorage) {
      localStorage.removeItem(key);
      setValue(null);
    }
  };

  return { value, setItem, getItem, removeItem };
};
