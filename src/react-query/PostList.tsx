import { useState } from "react";
import usePostList from "../hooks/usePostList";
import React from "react";

const pageSize = 10;

const PostList = () => {
  const {
    data: posts,
    error,
    isLoading: isPostListLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePostList({ pageSize });

  if (isPostListLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        className="btn btn-primary my-3 ms-3"
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
