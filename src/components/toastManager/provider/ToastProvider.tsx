import {
  ToastContext,
  ToastDispatchContext,
} from '@/components/toastManager/context/toastContext';
import { toastReducer } from '@/components/toastManager/store/toastManager.store';
import { IMessage } from '@/model/toast-messages';
import { useReducer } from 'react';

interface IToastProviderProps {
  children: React.ReactNode;
}

const initialToast: Array<IMessage> = [];

export const ToastProvider: React.FC<IToastProviderProps> = ({ children }) => {
  const [toasts, dispatch] = useReducer<any>(toastReducer, initialToast);

  return (
    <ToastContext.Provider value={toasts}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastContext.Provider>
  );
};
