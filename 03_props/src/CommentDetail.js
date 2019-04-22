import React from 'react';

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatarImage} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;

/**
 * import
 * function components
 * return ไปแสดงผลที่ DOM
 * export default ไป components หลัก
 * ! อย่าลืม import ที่ components App
 */
