import { useState, useEffect, useCallback } from "react";
import { IBook, IMessage } from "@/model";
import { useToastDispatch } from "@/components/ToastContext";

export const useFecth = (urlToFetch: string) => {
  const [data, setData] = useState<Array<IBook>>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispactch: any = useToastDispatch();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(urlToFetch).then((res) => res.json());
      setData(response);
      dispactch({ type: "add", payload: "Fetch avvenuta con successo" });
    } catch (error) {
      setError(`Error: ${error}`);
      dispactch({ type: "add", payload: `Error: ${error}` });
    } finally {
      setIsLoading(false);
    }
  }, [urlToFetch]);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading,
    refetch: fetchData,
  };
};
