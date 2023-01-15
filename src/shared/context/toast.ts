import { createContext } from "react";

export const ToastContext = createContext<any>({
  messages: [],
  setMessages: () => {},
});