import { IBook } from "@/model";
import { useBooks } from "../hook/useBooks";
import { ENDPOINTS } from "@/utils";

export const BookList = () => {
  const { data, isLoading, error, refetch } = useBooks(ENDPOINTS.BOOKS);

  if (isLoading)
    return (
      <div>
        <button
          className="bg-gray-300 m-2 p-2 rounded"
          onClick={() => refetch()}
        >
          Fetch
        </button>
        <h1>Loading data...</h1>
      </div>
    );

  if (error)
    return (
      <div>
        <button
          className="bg-gray-300 m-2 p-2 rounded"
          onClick={() => refetch()}
        >
          Fetch
        </button>
        <h1>Error: {error}</h1>
      </div>
    );

  return (
    <div>
      <button className="bg-gray-300 m-2 p-2 rounded" onClick={() => refetch()}>
        Fetch
      </button>
      <ul>
        {data?.map((book: IBook) => {
          const { title, id, author } = book;
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
};
