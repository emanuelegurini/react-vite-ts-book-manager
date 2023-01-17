import { createContext, useContext } from 'react';

interface IAction {
  type: string;
  payload: any;
}

export const ToastContext = createContext<any>(null);
export const ToastDispatchContext =
  createContext<React.Dispatch<IAction> | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === null) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const useToastDispatch = () => {
  const context = useContext(ToastDispatchContext);
  if (context === null) {
    throw new Error('useToastDispatch must be used within a ToastProvider');
  }
  return context;
};
