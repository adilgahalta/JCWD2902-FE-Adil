/** @format */

export const actionType = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

interface ICountAction {
  type: string;
  payload: number;
}

interface ICount {
  count: number;
}

export function reducer(state: ICount, action: ICountAction): ICount {
  switch (action.type) {
    case actionType.INCREMENT:
      return { ...state, count: state.count + action.payload };
    case actionType.DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
}
