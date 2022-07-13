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
    console.log(data);
  }

  return (
    <div>
      <blockquote>
        The man who comes back through the door in the wall will never be quite
        the same as the man who went out.
      </blockquote>
      <cite>Aldous Huxley</cite>
    </div>
  );
};

export default Api;
