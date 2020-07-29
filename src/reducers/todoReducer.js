const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-TODO':
      return [...state, action.payload];

    case 'CHANGE-TODO':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    case 'CHANGE-PRIORITY':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              priority:
                action.payload.priority === '...'
                  ? ''
                  : action.payload.priority,
            }
          : todo
      );

    case 'REMOVE-TODO':
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default todos;
