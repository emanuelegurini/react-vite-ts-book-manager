import { IMessage } from '@/model/toast-messages';
import { uuidv4 } from '@/utils/uuid';

type ToastManagerActions =
  | { type: 'add'; payload: IMessage }
  | { type: 'remove'; payload: string };

export function toastReducer(
  state: Array<IMessage>,
  action: ToastManagerActions
) {
  const { type, payload } = action;

  switch (type) {
    case 'add': {
      return [
        ...state,
        {
          id: uuidv4(),
          message: payload as IMessage,
        },
      ];
    }

    case 'remove': {
      return state.filter((toast: IMessage) => toast.id != payload);
    }

    default: {
      throw Error('Unknown action: ' + type);
    }
  }
}
