import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../Comments.css';
import CommentList from './CommentList';

function Comments() {
  const commentList = [];
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [list, setList] = useState(commentList);

  const handleName = (e) => {
    setName((x) => e.target.value);
  };

  const handleComment = (e) => {
    setComment((x) => e.target.value);
  };

  const handleRating = (e) => {
    setRating((x) => e.target.value);
  };

  const handleSubmit = () => {
    const newItem = list.concat({ name, comment, rating, id: uuidv4() });

    name.length > 0 && comment.length > 0
      ? setList(newItem)
      : alert('Please enter name and comment field');
    setName('');
    setComment('');
  };

  const eraseItem = (e) => {
    const deleteCommentId = e.target.id;

    setList((x) => {
      return list.filter((x) => x.id !== deleteCommentId);
    });
  };

 
  return (
    <div id='comments-div'>
      <h3>User Reviews:</h3>
      <div id='user-info'>
        <label>
          Your Name:
          <input type='text' value={name} onChange={handleName} />
        </label>
        <label>
          Comment:
          <textarea rows='4' value={comment} onChange={handleComment} />
        </label>
        <label htmlFor='rating'>Rating:</label>
        <select
          id='rating'
          name='rating'
          value={rating}
          onChange={handleRating}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <button onClick={handleSubmit}>Add</button>
      </div>
      <div id='user-comments'>
        <CommentList list={list} eraseItem={eraseItem} />
      </div>
    </div>
  );
}

export default Comments;
