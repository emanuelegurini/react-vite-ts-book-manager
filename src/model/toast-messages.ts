export interface IMessage {
  message: string;
  id: string;
}

export interface IToast extends IMessage {
  removeToast: (index: string) => void;
}
