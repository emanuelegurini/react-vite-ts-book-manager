import { useEffect, useState } from "react";
import { ToastManager } from "@/components";
import { ToastContext } from "@/context/index";
import { uuidv4, ENDPOINTS } from "@/utils";
import { IBook, IMessage } from "@/model";
import { useFecth } from "./shared/hooks/useFetch";

function App() {
  const { data, isLoading, error, refetch } = useFecth(ENDPOINTS.BOOKS);
  const [messages, setMessages] = useState<Array<IMessage>>([]);

  const addToast = () => {
    setMessages((prev: Array<IMessage>) => [
      ...prev,
      { message: "messaggio", id: uuidv4() },
    ]);
  };

  /*   useEffect(() => {
    setMessages((prev: Array<IMessage>) => [
      ...prev,
      { message: "Fetch avvenuta con successo!", id: uuidv4() },
    ]);
  }, [data, error]); */

  return (
    <ToastContext.Provider value={{ messages, setMessages }}>
      <button className="bg-gray-300 m-2 p-2 rounded" onClick={addToast}>
        Add Message
      </button>
      <button className="bg-gray-300 m-2 p-2 rounded" onClick={() => refetch()}>
        Fetch
      </button>
      <ul>
        {data?.map((book: IBook) => {
          const { title, author, price, id } = book;
          return (
            <li className="p-2 m-2" key={"book-" + id}>
              <h2 className="font-bold ">{title}</h2>
              <h3>{author}</h3>
              <p>{price}€</p>
            </li>
          );
        })}
      </ul>
      <ToastManager />
    </ToastContext.Provider>
  );
}

export default App;
