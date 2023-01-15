import { createPortal } from "react-dom";
import { Toast } from "@/components";
import { useContext } from "react";
import { ToastContext } from "@/shared/context/toast";
import { IMessage } from "@/model";

const ToastManager: React.FC<{}> = (): React.ReactElement => {
  const { messages, setMessages } = useContext(ToastContext);

  const removeToast = (index: string) => {
    setMessages((prev: Array<IMessage>) =>
      prev.filter((_: IMessage) => _.id != index)
    );
  };

  return (
    <>
      {createPortal(
        <>
          <div className="absolute bottom-0 right-0 overflow-y-scroll">
            {messages.map((message: IMessage, index: number) => {
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
