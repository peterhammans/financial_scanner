export const createReducer = <State>(
  initialState: State,
  handlers: Record<
    string,
    (
      state: State,
      action: {
        type: string;
        payload: any;
      }
    ) => State
  >
) => {
  return function reducer(
    state = initialState,
    action: {
      type: string;
      payload: any;
    }
  ) {
    return (handlers[action.type] && handlers[action.type](state, action)) || state;
  };
};
