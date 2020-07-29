let id = 0;

export const addTodo = (todo) => {
  return {
    type: 'ADD-TODO',
    payload: { id: ++id, task: todo, done: false },
  };
};

export const checkTodo = (id) => {
  return {
    type: 'CHANGE-TODO',
    payload: id,
  };
};

export const removeTodo = (id) => {
  return {
    type: 'REMOVE-TODO',
    payload: id,
  };
};
