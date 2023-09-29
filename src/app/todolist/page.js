'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos } from '../redux/todoSlice';
import Link from 'next/link';

export default function Page() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const todoData = useSelector((data) => data.todosData.todos);
  return (
    <div
      style={{
        border: '1px solid grey',
        border: '1px solid grey',
        padding: '10px 30px',
        marginBottom: '30px',
        gap: '600px',
        alignItems: 'center',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '30px',
          textDecorationLine: 'underline',
        }}
      >
        Add Todo
      </h2>
      <Link
        style={{
          backgroundColor: '#D2D2D2',
          outline: 'none',
          border: 'none',
          cursor: 'pointer',
          fontWeight: '700',
          padding: '10px 30px',
          fontSize: '18px',
          borderRadius: '8px',
          textDecoration: 'none',
          color: 'inherit',
        }}
        href="/"
      >
        Go to Home Page
      </Link>
      <div
        style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}
      >
        <input
          style={{
            width: '300px',
            height: '50px',
            padding: '5px',
            marginTop: '10px',
            fontSize: '18px',
          }}
          type="text"
          placeholder="Add new task"
          onChange={(e) => setTodo(e.target.value)}
        />
        <div
          style={{
            marginTop: '12px',
            padding: '2px 0px',
            display: 'flex',
            gap: '16px',
          }}
        >
          <button
            onClick={() => dispatch(addTodos(todo))}
            style={{
              backgroundColor: '#D2D2D2',
              outline: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px 30px',
              fontSize: '18px',
              borderRadius: '8px',
            }}
          >
            Add Todo
          </button>
        </div>
      </div>
      <div
        style={{
          marginTop: '50px',
          padding: '10px 3px',
          border: '1px solid grey',
        }}
      >
        <h2>Display Todo</h2>
        <div>
          {todoData.length !== 0 ? (
            <div>
              {todoData.map((item) => (
                <h3
                  style={{
                    background: '#b2b2b2',
                    padding: '8px 15px',
                    fontWeight: 'normal',
                    marginTop: '20px',
                  }}
                  key={item.id}
                >
                  {item.name}
                </h3>
              ))}
            </div>
          ) : (
            <h3
              style={{
                backgroundColor: 'bisque',
                padding: '8px 15px',
                fontWeight: 'normal',
                marginTop: '20px ',
              }}
            >
              No Todos
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}
