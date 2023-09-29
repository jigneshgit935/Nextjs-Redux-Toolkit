'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';

const DisplayUsers = () => {
  const userData = useSelector((data) => data.usersData.users);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        border: '1px solid grey',
        padding: '10px 30px',
        height: '350px',
        overflow: 'scroll',
      }}
    >
      <h2 style={{ fontWeight: 'bold', fontSize: '30px' }}>
        Display Users
        <div>
          {userData.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#d2d2d2',
                padding: '10px 10px',
                borderRadius: '10px',
                width: '500px',
                marginTop: '10px',
              }}
            >
              <h4
                style={{
                  fontSize: '25px',
                }}
              >
                {item.name}
              </h4>
              <button
                style={{
                  outline: 'none',
                  border: 'none',
                  padding: '2px 15px',
                  borderRadius: '50px',
                }}
                onClick={() => dispatch(removeUser(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default DisplayUsers;
