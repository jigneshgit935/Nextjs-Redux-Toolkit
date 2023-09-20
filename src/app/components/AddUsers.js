'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slice';

const AddUsers = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const userDispatch = () => {
    dispatch(addUser(name));
  };

  return (
    <div
      style={{
        border: '1px solid grey',
        padding: '10px 30px',
        height: '200px',
        marginBottom: '30px',
      }}
    >
      <h2 style={{ fontWeight: 'bold', fontSize: '30px' }}>Add Users</h2>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Add New Users"
        style={{
          width: '250px',
          height: '50px',
          padding: '5px',
          marginTop: '10px',
          fontSize: '18px',
        }}
      />
      <br />
      <button
        onClick={userDispatch}
        style={{
          backgroundColor: '#D2D2D2',
          outline: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '10px 30px',
          fontSize: '18px',
          marginTop: '20px',
          borderRadius: '8px',
        }}
      >
        Add User
      </button>
    </div>
  );
};

export default AddUsers;
