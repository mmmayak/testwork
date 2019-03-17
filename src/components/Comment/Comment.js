import React from 'react';
import Rating from 'react-rating';

 const Comment = (props) => {
  return (
    <div className='card'>
      <div className='card-header'>
      <Rating
        emptySymbol={<i className="far fa-star"></i>}
        fullSymbol={<i className="fas fa-star"></i>}
        initialRating={props.comment.rate}
        readonly
      />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>@{props.comment.created_by.username}</h5>
        <p className='card-text'>{props.comment.text}</p>
      </div>
    </div>
  )
}

export default Comment;