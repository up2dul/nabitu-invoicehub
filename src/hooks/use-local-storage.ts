import { useState } from "react";

/**
 * A custom hook to manage stateful values that are synchronized with localStorage.
 *
 * This hook retrieves the value from localStorage for the given key, or returns
 * the provided initial value if no value is found or an error occurs during retrieval.
 * It also provides a function to update both the state and the corresponding entry in localStorage.
 *
 * @template T - The type of the value being stored.
 * @param {string} key - The key used to store the value in localStorage.
 * @param {T} initialValue - The initial value to use if no stored value exists.
 * @returns {[T, (value: T) => void]} A tuple containing the current value and a setter function to update it.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item =
        typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}
