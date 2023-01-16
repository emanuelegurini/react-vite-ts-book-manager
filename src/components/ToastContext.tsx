import { IMessage } from "@/model";
import { uuidv4 } from "@/utils";
import { createContext, useContext, useReducer } from "react";

interface IAction {
  type: string;
  payload: any;
}

interface IToastProviderProps {
  children: React.ReactNode;
}

const ToastContext = createContext<any>(null);
const ToastDispatchContext = createContext<React.Dispatch<IAction> | null>(
  null
);

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

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === null) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const useToastDispatch = () => {
  const context = useContext(ToastDispatchContext);
  if (context === null) {
    throw new Error("useToastDispatch must be used within a ToastProvider");
  }
  return context;
};

function toastReducer(toasts: any, action: IAction): Array<IMessage> {
  const { type, payload } = action;

  switch (type) {
    case "add": {
      return [
        ...toasts,
        {
          id: uuidv4(),
          message: payload,
        },
      ];
    }

    case "remove": {
      return toasts.filter((toast: any) => toast.id != payload);
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialToast: Array<IMessage> = [];
