import { useEffect, useState } from "react";

export default function useLocalStorage(key) {
  const [data, setData] = useState(null);
  const [invokedValue, setInvokedValue] = useState(null);

  useEffect(function () {
    const localData = localStorage.getItem(key);
    setData(data ? { success: true, data: JSON.parse(localData) } : { success: false });
  }, [invokedValue]);

  return { data, onInvokedValue: setInvokedValue };
};