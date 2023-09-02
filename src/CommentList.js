import React from "react";

function CommentList({ comments }) {
  return (
    <div className="comment-list-wrapper">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
