import React from 'react';

const Card = ({ user }) => {
  return (
    <>
      <div className='bg-slate-600 w-[300px] h-[50vh] rounded-md flex p-4 items-center flex-col '>
        <div className='w-20 h-20 rounded-[50%] overflow-hidden'>
          <img
            className='w-[100%] h-[100%] object-cover'
            src={user.src}
            alt=''
          />
        </div>
        <h1>My Name: {user.title}</h1>
        <p>Age: {user.age}</p>
        <p>Job: {user.job}</p>
        <p>Address: {user.address}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </>
  );
};

export default Card;
