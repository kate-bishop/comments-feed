import React from 'react';
import { Comment } from '../utils/types';

interface CommentCardProps {
  comment: Comment
}

const CommentCard: React.FC<CommentCardProps> = ({
  comment
}) => {
  return (
    <div className="comment-card" key={comment.id}>
      <p>{comment.message}</p>
      <p>{comment.name}</p>
      <p>{new Date(comment.created).toDateString()}</p>
    </div>
  );
}

export default CommentCard;
