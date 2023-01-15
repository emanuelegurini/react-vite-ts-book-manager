import { IMessage } from '@/model';
import { createContext } from 'react';

interface IToastContext {
  messages: IMessage[];
  setMessages: React.Dispatch<React.SetStateAction<IToastContext['messages']>>;
}

export const ToastContext = createContext<IToastContext>({
  messages: [],
  setMessages: () => {},
});
