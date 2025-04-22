import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

export default function useQuery() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  async function query(endpoint, information = {}, effect) {
    try {
      setLoading(true);

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(information),
        credentials: "include"
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.payload);
      toast.success("Success");
      if (effect) dispatch(effect(data.payload));
      return true;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, query };
}