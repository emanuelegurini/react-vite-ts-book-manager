import { useState, useEffect, useContext, useCallback } from 'react';
import { IBook, IMessage } from '@/model';
import { uuidv4 } from '@/utils';
import { ToastContext } from '@/context/index';

export const useFecth = (urlToFetch: string) => {
  const [data, setData] = useState<Array<IBook>>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { setMessages } = useContext(ToastContext);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(urlToFetch).then((res) => res.json());
      setData(response);
      setMessages((prev: Array<IMessage>) => [
        ...prev,
        { message: 'Fetch avvenuta con successo!', id: uuidv4() },
      ]);
    } catch (error) {
      setError(`Erros: ${error}`);
      setMessages((prev: Array<IMessage>) => [
        ...prev,
        { message: `Erros: ${error}`, id: uuidv4() },
      ]);
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
