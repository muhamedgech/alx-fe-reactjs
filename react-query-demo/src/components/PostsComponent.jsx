import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async (page = 1) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  const [page, setPage] = React.useState(1);

  // Use the page parameter for pagination
  const { data, error, isLoading, isError, isFetching, refetch } = useQuery(
    ['posts', page], // Use an array to cache by page
    () => fetchPosts(page),
    {
      cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
      staleTime: 1000 * 30, // Data considered fresh for 30 seconds
      refetchOnWindowFocus: false, // Disable refetch on window focus
      keepPreviousData: true, // Keep previous data while loading new data
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts (Page {page})</h2>
      <button onClick={refetch}>Refetch Data</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div>
        <button
          disabled={isFetching}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous Page
        </button>
        <button
          disabled={isFetching}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default PostsComponent;
