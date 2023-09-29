'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos } from '../redux/todoSlice';

export default function Page() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const todoData = useSelector((data) => data.todosData.todos);
  return (
    <div>
      <div>
        <h3>Add Todo</h3>
        <input
          type="text"
          placeholder="Add new task"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={() => dispatch(addTodos(todo))}>Add Todo</button>
      </div>
      <div>
        <h5>Display Todo</h5>
        <div>
          {todoData.length !== 0 ? (
            <div>
              {todoData.map((item) => (
                <h1 key={item.id}>{item.name}</h1>
              ))}
            </div>
          ) : (
            'No Todos'
          )}
        </div>
      </div>
    </div>
  );
}
