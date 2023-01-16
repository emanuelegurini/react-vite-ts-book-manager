import { useState, useEffect, useCallback } from 'react';
import { IBook, IMessage } from '@/model';
import { useToastDispatch } from '@/components/ToastContext';
import { Api } from '@/utils';

export const useBooks = (urlToFetch: string) => {
  // State to hold the data returned from the API
  const [data, setData] = useState<Array<IBook>>([]);
  // State to hold any error message
  const [error, setError] = useState<string | null>(null);
  // State to indicate whether the request is still loading
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Dispatch function to update the toast message
  const dispactch: any = useToastDispatch();
  // Create an instance of the Api class, passing in the base URL
  const api = new Api();

  // Function to fetch data from the API
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Make a GET request to the API using the Api class
      const response = await api.get(urlToFetch);
      // Update the data state with the response
      setData(response);
      dispactch({ type: 'add', payload: 'Fetch avvenuta con successo' });
    } catch (error) {
      // Update the error state with the error message
      setError(`Error: ${error}`);
      dispactch({ type: 'add', payload: `Error: ${error}` });
    } finally {
      setIsLoading(false);
    }
  }, [urlToFetch]);

  // Use the useEffect hook to fetch data when the component mounts
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
