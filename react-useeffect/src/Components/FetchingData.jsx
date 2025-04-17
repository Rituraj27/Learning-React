import { useEffect, useState } from 'react';

export default function FetchingData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      console.log(data);
      if (data && data.length) setData(data);
    }
    getData();
  }, []);
  return (
    <>
      <ul>
        {data.map(function ({ id, title, body }) {
          return (
            <ul key={id}>
              <li>{title}</li>
              <li>{body}</li>
            </ul>
          );
        })}
      </ul>
    </>
  );
}
