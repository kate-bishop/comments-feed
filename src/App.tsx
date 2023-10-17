import React, { useState, useEffect } from 'react';
import { getComments } from './utils/api';
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
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Comments Feed
        </h1>
        {comments.map((comment) => {
          return <CommentCard comment={comment} />
        })}
      </header>
    </div>
  );
}

export default App;
