import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();  // Get the dynamic 'id' from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the blog post based on 'id'
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching blog post:", error));
  }, [id]);

  if (!post) {
    return <p>Loading blog post...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default BlogPost;
