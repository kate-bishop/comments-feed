import React, { useState, useEffect } from 'react';
import { getComments, deleteComments } from './utils/api';
import { seedStarterComments } from './utils/utils';
import { Comment } from './utils/types';
import './App.css';
import CommentCard from './components/CommentCard';

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    getComments().then((data) => {
      setComments(data);
    });
  }, [])

  const clearComments = () => {
    deleteComments().then((data) => {
      setComments([]);
    });
  }

  const seedComments = () => {
    seedStarterComments()
    getComments().then((data) => {
      setComments(data);
    });
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          Comments Feed
        </h1>
        <div className="buttons-container">
          <button onClick={clearComments} className="delete">Clear Comments</button>
          <button onClick={seedComments} className="seed">Seed Comments</button>
        </div>
      </header>
      <body>
        <div className="comments-container">
          {comments.map((comment) => {
            return <CommentCard comment={comment} key={comment.id} />
          })}</div>
      </body>
    </div>
  );
}

export default App;
