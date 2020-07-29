import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  checkTodo,
  removeTodo,
  changePriority,
} from '../../actions/todoActions';

import './index.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  let priority = '';
  return (
    <>
      {todos.map((t) => {
        return (
          <div className="cardList" key={t.id}>
            <div>
              <input
                type="checkbox"
                name="check"
                id="todo"
                checked={t.done ? true : false}
                onChange={() => dispatch(checkTodo(t.id))}
              />
              <label className="taskName" htmlFor="todo">
                {t.task}
              </label>
            </div>
            <div className="btnActions">
              <select
                value={t.priority}
                ref={(el) => (priority = el)}
                onChange={() => dispatch(changePriority(t.id, priority.value))}
                className="select"
                name="options"
                id="priority"
              >
                <option>...</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="hight">Hight</option>
              </select>
              <button
                className="btnRemove"
                onClick={() => dispatch(removeTodo(t.id))}
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
