// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/rituraj27')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);

  const data = useLoaderData();

  return (
    <div className='flex justify-center flex-col items-center bg-gray-600 p-4'>
      <h1>Github Name: {data.login}</h1>
      <p>Github Followers: {data.followers}</p>
      <img src={data.avatar_url} alt='user picture' width={200} height={200} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/rituraj27');
  return response.json();
};
