'use client';

import { useDispatch, useSelector } from 'react-redux';
import { fetchApiUsers } from '../redux/slice';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiUsers());
  }, []);

  const apiUserData = useSelector((data) => data.usersData.userApiData);
  return (
    <div style={{ border: '1px solid grey', padding: '15px 20px' }}>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '30px',
          fontWeight: '700',
          textDecorationLine: 'underline',
        }}
      >
        (Redux) Get Data Through API
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
      <div style={{ marginTop: '20px' }}>
        {apiUserData.length !== 0 ? (
          <div>
            {apiUserData.map((item) => {
              return (
                <h3
                  style={{
                    marginTop: '12px',
                    fontWeight: 'normal',
                    background: '#b2b2b2',
                    padding: '8px 15px',
                    fontSize: '22px',
                    cursor: 'pointer',
                  }}
                  key={item.id}
                >
                  {item.name}
                </h3>
              );
            })}
          </div>
        ) : (
          <h3
            style={{
              marginTop: '12px',
              fontWeight: 'normal',
              padding: '8px 15px',
              fontSize: '22px',
              cursor: 'pointer',
              backgroundColor: 'beige',
            }}
          >
            No Api Fetched Users Data
          </h3>
        )}
      </div>
    </div>
  );
}
