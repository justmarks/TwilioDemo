const ACTION_CHANGE_ADDRESS = 'CHANGE_ADDRESS';

const initialState = {
  isOpen: true,
};

export class Actions {
  static changeAddress = () => ({ type: ACTION_CHANGE_ADDRESS });
}

export function reduce(state = initialState, action) {
  switch (action.type) {
    case ACTION_CHANGE_ADDRESS: {
      return {
        ...state,
        isOpen: false,
      };
    }

    default:
      return state;
  }
}
