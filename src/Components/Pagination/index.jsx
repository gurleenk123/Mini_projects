import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function Index() {
  const [Posts, setPosts] = useState([]);
  const [postPerPage, setPostPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log("data", data);
      setPosts(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    console.log("post component");
  });
  function handlePageChange(pageNo) {
    setCurrentPage(pageNo);
  }

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = Posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <ul>
        {currentPosts.map((data, index) => (
          <div key={index}>
            <li>{data.title}</li>
          </div>
        ))}
      </ul>

      <Pagination
        postsPerPage={postPerPage}
        totalPosts={Posts.length}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
}
