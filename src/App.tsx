import { useState } from "react";
import { ToastManager } from "@/components";
import { ToastContext } from "@/context/index";
import { uuidv4, ENDPOINTS } from "@/utils";
import { IBook, IMessage } from "@/model";
import { useFecth } from "./shared/hooks/useFetch";

function App() {
  const [messages, setMessages] = useState<Array<IMessage>>([]);
  const { data, isLoading, error, refetch } = useFecth(
    ENDPOINTS.BOOKS,
    setMessages
  );

  const addToast = () => {
    setMessages((prev: Array<IMessage>) => [
      ...prev,
      { message: "messaggio", id: uuidv4() },
    ]);
  };

  return (
    <ToastContext.Provider value={{ messages, setMessages }}>
      <button className="bg-gray-300 m-2 p-2 rounded" onClick={addToast}>
        Add Message
      </button>
      <button className="bg-gray-300 m-2 p-2 rounded" onClick={() => refetch()}>
        Fetch
      </button>

      <ToastManager />
    </ToastContext.Provider>
  );
}

export default App;
