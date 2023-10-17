import React, { useState, useEffect } from 'react';
import { getComments, deleteComments, postComment } from './utils/api';
import { seedStarterComments } from './utils/utils';
import { Comment } from './utils/types';
import './App.css';
import CommentCard from './components/CommentCard';
import CommentInput from './components/CommentInput';

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    getComments().then((data) => {
      setComments(data.reverse());
    });
    const interval = setInterval(() => {
      getComments().then((data) => {
        // TODO if length is greater than comments, send notification
        setComments(data.reverse());
      });
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const clearComments = () => {
    deleteComments().then((data) => {
      setComments([]);
    });
  }

  const seedComments = () => {
    seedStarterComments()
    getComments().then((data) => {
      setComments(data.reverse());
    });
  }

  const postCommentAction = (name: string, message: string) => {
    postComment(name, message);
    getComments().then((data) => {
      setComments(data.reverse());
    });
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          Comments Feed
        </h1>
        <CommentInput postCommentAction={postCommentAction} />
      </header>
      <div className="comments-container">
        {comments.reverse().map((comment) => {
          return <CommentCard comment={comment} key={comment.id} />
        })}
      </div>
      <div className="data-buttons-container">
        <button onClick={seedComments} className="seed">Seed Comments</button>
        <button onClick={clearComments} className="delete">Clear Comments</button>
      </div>
    </div>
  );
}

export default App;
