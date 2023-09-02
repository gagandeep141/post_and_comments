import React, { useState, useEffect } from "react";

function PostList({ comments, onSelectPost }) {
  const [uniquePosts, setUniquePosts] = useState([]);

  useEffect(() => {
    const posts = [...new Set(comments.map((comment) => comment.postId))];
    setUniquePosts(posts);
  }, [comments]);

  return (
    <div className="post-list-wrapper">
      <h2>Posts</h2>
      <ul>
        {uniquePosts.map((postId) => (
          <li key={postId} onClick={() => onSelectPost(postId)}>
            {comments.find((comment) => comment.postId === postId).body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
