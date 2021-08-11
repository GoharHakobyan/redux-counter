export const INCREMENT_ACTION = "INCREMENT_ACTION";
export const DECREMENT_ACTION = "DECREMENT_ACTION";

export const incrementCreator = () => {
  return { type: INCREMENT_ACTION };
};

export const decrementCreator = () => {
  return { type: DECREMENT_ACTION };
};

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ACTION:
      return { ...state, count: state.count + 1 };
    case DECREMENT_ACTION:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
