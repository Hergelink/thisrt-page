import React from 'react';

function CommentList({ list, eraseItem }) {
  return (
    <div>
      <ul>
        {list.map((item) => {
          return (
            <div key={item.id} className='comment-item-container'>
              <div className='item-container'>
                <li className='name-item'>{`User: ${item.name}`}</li>
                <li className='comment-item'>{`Comment: ${item.comment}`}</li>
                <li className='rating-item'>{`Rating: ${item.rating}`}</li>
              </div>

              <button
                id={item.id}
                onClick={eraseItem}
                className='comment-delete-btn'
              >
                X
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default CommentList;
