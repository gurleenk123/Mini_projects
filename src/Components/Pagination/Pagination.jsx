import React, { useEffect } from "react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  currentPage,
  handlePageChange,
}) {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    paginationNumbers.push(i);
  }

  useEffect(() => {
    console.log("pagination component");
  });

  return (
    <>
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          style={
            currentPage == pageNumber
              ? { background: "blue", color: "white", margin: "10px" }
              : { margin: "10px" }
          }
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </>
  );
}
