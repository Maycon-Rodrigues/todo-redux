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

  const colorPriority = (priority) =>
    priority === '1'
      ? { backgroundColor: '#A6F4DC' }
      : priority === '2'
      ? { backgroundColor: '#f48c06' }
      : priority === '3'
      ? { backgroundColor: '#d00000' }
      : { backgroundColor: 'transparent' };

  return (
    <div className="wrapperList">
      {todos
        .sort((a, b) => b.priority - a.priority)
        .map((t) => {
          return (
            <div className="cardList" key={t.id}>
              <div className="card">
              <div className="flexRow">
                <div
                  className="tagPriority"
                  style={colorPriority(t.priority)}
                ></div>
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
                  onChange={(e) =>
                    dispatch(changePriority(t.id, e.target.value))
                  }
                  className="select"
                  name="priority"
                  id="priority"
                >
                  <option>...</option>
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                  <option value="3">High</option>
                </select>
                <button
                  className="btnRemove"
                  onClick={() => dispatch(removeTodo(t.id))}
                >X</button>
              </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
