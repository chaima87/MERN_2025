export const initialState = [];

export function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: Date.now(),
          content: action.payload,
          completed: false,
        },
      ];
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.payload);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

