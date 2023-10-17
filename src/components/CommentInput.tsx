import React, { useState } from 'react';

interface CommentInputProps {
    postCommentAction: (name: string, message: string) => void
}

const CommentInput: React.FC<CommentInputProps> = ({
    postCommentAction
}) => {
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }

    const postComment = () => {
        postCommentAction(name, message);
    }

    return (
        <form onSubmit={postComment} className="comment-form">
            <label>
                Name
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
                Message
                <textarea value={message} onChange={handleMessageChange} />
            </label>
            <div className="button-container">
                <input type="submit" value="Post Comment" />
            </div>
        </form>
    );
}

export default CommentInput;
