'use client';

import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';

export default function Page() {
  const userData = useSelector((data) => data.usersData.users);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '10px 20px' }}>
      <h1>Remove user page</h1>
      {userData.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              width: '230px',
              padding: '10px 20px',
              backgroundColor: '#d2d2d2',
              marginTop: '10px',
              borderRadius: '20px',
            }}
          >
            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2>{item.name}</h2>
              <button onClick={() => dispatch(removeUser(item.id))}>
                Remove
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
}
