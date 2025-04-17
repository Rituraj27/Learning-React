import { useEffect, useState } from 'react';

export default function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <>
      {data.map(({ id, title, completed }) => (
        <ul key={id}>
          <li>{title}</li>
          <li>{completed ? 'True' : 'False'}</li>
        </ul>
      ))}
    </>
  );
}
