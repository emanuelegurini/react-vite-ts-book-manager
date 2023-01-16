import { createPortal } from "react-dom";
import { Toast } from "@/components";
import { IMessage } from "@/model";
import { useToast, useToastDispatch } from "@/components/ToastContext";

const ToastManager: React.FC<{}> = (): React.ReactElement => {
  const toasts = useToast();
  const dispatch = useToastDispatch();

  const removeToast = (index: string): void => {
    dispatch({ type: "remove", payload: index });
  };

  return (
    <>
      {createPortal(
        <>
          <div className="absolute bottom-0 right-0 overflow-y-scroll">
            {toasts?.map((message: IMessage, index: number) => {
              const { message: msg, id } = message;
              return (
                <Toast
                  message={msg}
                  id={id}
                  removeToast={removeToast}
                  key={`message-${index}`}
                />
              );
            })}
          </div>
        </>,
        document.body
      )}
    </>
  );
};

export default ToastManager;
