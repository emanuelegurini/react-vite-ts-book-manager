import { useEffect } from "react";
import { IToast } from "@/model";

const Toast: React.FC<IToast> = ({
  message,
  id,
  removeToast,
}): React.ReactElement => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 1500);
  }, []);

  return (
    <div
      onClick={() => removeToast(id)}
      className="w-96 p-4 m-2 rounded bg-green-200"
    >
      <p>{message}</p>
    </div>
  );
};

export default Toast;
