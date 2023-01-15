import { useState } from 'react';
import { IMessage } from '@/model';
import { ToastContext } from '../context/toast';

interface IToastProvider {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<IToastProvider> = ({
  children,
}): React.ReactElement => {
  const [messages, setMessages] = useState<Array<IMessage>>([]);
  return (
    <ToastContext.Provider value={{ messages, setMessages }}>
      {children}
    </ToastContext.Provider>
  );
};
