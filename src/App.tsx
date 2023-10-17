import React, { useState, useEffect } from 'react';
import { getComments, deleteComments } from './utils/api';
import { seedStarterComments } from './utils/utils';
import { Comment } from './utils/types';
import './App.css';
import CommentCard from './components/CommentCard';

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    if (!comments.length) {
      getComments().then((data) => {
        setComments(data);
      });
    }
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
    <div className="App">
      <header className="App-header">
        <h1>
          Comments Feed
        </h1>
      </header>
      {comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.id} />
      })}
      <button onClick={clearComments}>Clear Comments</button>
      <button onClick={seedComments}>Seed Comments</button>
    </div>
  );
}

export default App;
