import React from 'react';
import { Comment } from '../utils/types';

interface CommentCardProps {
  comment: Comment
}

const CommentCard: React.FC<CommentCardProps> = ({
  comment
}) => {
  const dateTime = new Date(comment.created);
  const dateTimeString = `${dateTime.toDateString()} at ${dateTime.toLocaleTimeString()}`;
  
  return (
    <div className="comment-card" key={comment.id}>
      <p className="message">{comment.message}</p>
      <p className="name">{comment.name} on {dateTimeString}</p>
    </div>
  );
}

export default CommentCard;
