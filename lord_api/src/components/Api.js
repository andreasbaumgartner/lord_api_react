import React from "react";
import { useEffect, useState } from "react";

// API to Call
// https://the-one-api.dev/v2/book
// Dokumentation
// https://the-one-api.dev/documentation
const API_Key = process.env.REACT_APP_API_KEY;

const headers = {
  Accept: "application/json",
  Authorization: API_Key,
};
const Api = () => {
  const url = "https://the-one-api.dev/v2/book";
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  async function getAllBooks() {
    const res = await fetch(url, {
      headers: headers,
    });
    const data = await res.json();
    console.log(data.docs);
    setData(data.docs);
  }

  if (!data.length) return <div>No data</div>;

  return (
    <div>
      <h1>Booklist Lord of the Ring</h1>
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
