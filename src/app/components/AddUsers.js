'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slice';
import Link from 'next/link';

const AddUsers = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const userDispatch = () => {
    if (name.length !== 0) {
      dispatch(addUser(name));
    } else {
      alert('Please Add User Name');
    }
  };

  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '32px',
          padding: '15px 0px',
          textDecorationLine: 'underline',
        }}
      >
        REDUX-TOOLKIT
      </h1>
      <div
        style={{
          border: '1px solid grey',
          padding: '10px 30px',
          marginBottom: '30px',
          display: 'flex',
          gap: '600px',
          alignItems: 'center',
        }}
      >
        <div>
          <h2 style={{ fontWeight: 'bold', fontSize: '30px' }}>Add Users</h2>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Add New Users"
            style={{
              width: '300px',
              height: '50px',
              padding: '5px',
              marginTop: '10px',
              fontSize: '18px',
            }}
          />

          <div
            style={{
              marginTop: '20px',
              padding: '2px 0px',
              display: 'flex',
              gap: '16px',
            }}
          >
            <button
              onClick={userDispatch}
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
              Add User
            </button>
            <Link
              style={{
                backgroundColor: '#D2D2D2',
                outline: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '10px 30px',
                fontSize: '18px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'inherit',
              }}
              href="/removeuser"
            >
              New Page
            </Link>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '50px',
          }}
        >
          <Link
            style={{
              backgroundColor: '#D2D2D2',
              outline: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px 30px',
              fontSize: '18px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit',
            }}
            href="/todolist"
          >
            Go to Todo Page
          </Link>
          <Link
            style={{
              backgroundColor: '#D2D2D2',
              outline: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px 30px',
              fontSize: '18px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit',
            }}
            href="/apiuser"
          >
            Go to Api ListPage
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddUsers;
