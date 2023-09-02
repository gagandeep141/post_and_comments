import React, { useState, useEffect } from "react";
import "./styles.css";
import PostList from "./PostList";
import CommentList from "./CommentList";

function App() {
  const [comments, setComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data.slice(0))); // Fetch the first 100 comments
  }, []);

  const handleSelectPost = (postId) => {
    setSelectedPostId(postId);
  };

  const filteredComments = selectedPostId
    ? comments.filter((comment) => comment.postId === selectedPostId)
    : [];

  return (
    <div className="App">
      <PostList comments={comments} onSelectPost={handleSelectPost} />
      <CommentList comments={filteredComments} />
    </div>
  );
}

export default App;
