import React from 'react';

const AddUsers = () => {
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
