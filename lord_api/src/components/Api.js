import React from "react";
import { useEffect, useState } from "react";
// API to Call
// https://the-one-api.dev/v2/book

const Api = () => {
  const url = "https://the-one-api.dev/v2/book";

  const [data, setData] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  async function getAllBooks() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.docs);
    setData(data.docs);
  }
  //   return (
  //   <div>
  //       {data.map((project, key) => {
  //         return <p key={key}>{project.name}</p>;
  //       })}
  //     </div>
  //   )
  if (!data.length) return <div>No data</div>;

  return (
    <div>
      {data.map((book) => {
        return (
          <div style={{ marginBottom: 4 }}>
            <blockquote>{book.name}</blockquote>
            <cite>Lord of the Rings</cite>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
