'use client';

import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';
import Link from 'next/link';

export default function Page() {
  const userData = useSelector((data) => data.usersData.users);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid grey' }}>
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
              <span
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <h2>{item.name}</h2>
                <button onClick={() => dispatch(removeUser(item.id))}>
                  Remove
                </button>
              </span>
            </div>
          );
        })}
      </div>
      <div style={{ margin: '30px 22px' }}>
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
          href="/"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
}
