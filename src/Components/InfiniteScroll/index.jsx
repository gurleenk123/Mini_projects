import React, { useState, useRef, useEffect } from "react";
import useBookSearch from "./useBookSearch";

export default function Index() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const { error, booklist, loading } = useBookSearch(query, page);

  function handlechange(e) {
    setQuery(e.target.value);
  }

  //This function will be invoked by the intersection observer
  //when the loader element becomes visible in the viewport.
  //It increments the page state variable when the loader element intersects with the viewport.

  //By using useCallback, React memoizes the function, meaning
  //it will return the same function reference as long as its dependencies remain unchanged.
  //for this case we have to pass handleobserver dependency to useEffect that whenever it will change
  //useeffect will run
  // const handleObserver = useCallback((entries) => {
  //   console.log("handle observer", entries);
  //   const target = entries[0];-
  //   if (target.isIntersecting) {
  //     setPage((prev) => prev + 1);
  //   }
  // }, []);

  //as callback is not necessarily then useEffect will run once and unmount the loader element when not in use
  const handleObserver = (entries) => {
    console.log("handle observer", entries);
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
      //Indicates that the target element is entirely outside the viewport or root elemen
    };

    //create new intersection observer taking 1st parameter as callback and 2nd as option or properties
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current); //when loader element is in focus then observe this element

    return () => {
      console.log("return");
      if (loader.current) observer.unobserve(loader.current);
    };
    //. Once an observer starts observing a target element, it will continue to observe it until you explicitly call the unobserve()
    //method on the observer and pass the target element as an argument.
    //so return will unmount the element from DOM when we goes to another componenet
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Search any Book"
        value={query}
        onChange={handlechange}
      />

      <ul style={{ marginTop: "12px" }}>
        {booklist.map((book, i) => (
          <li key={i}>{book}</li>
        ))}
      </ul>
      {loading && <p style={{ margin: "10px" }}>Loading...</p>}

      {error && <p>Error!</p>}
      <div ref={loader} />
    </>
  );
}
