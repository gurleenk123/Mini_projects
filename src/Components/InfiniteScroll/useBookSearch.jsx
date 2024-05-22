import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useBookSearch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [booklist, setbookList] = useState([]);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await axios.get(
        `https://openlibrary.org/search.json?q=${query}&page=${page}`
      );
      setbookList((prev) => [
        ...new Set([...prev, ...res.data.docs.map((d) => d.title)]),
      ]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchBooks();
    console.log("books", booklist);
  }, [page, query]);

  return { booklist, error, loading };
}
