import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [storedValue, setStoredValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue !== null ? savedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}