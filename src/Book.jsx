import React, { useState, useEffect } from "react";
const Book = (props) => {
  const {
    id,
    title,
    author,
    pages,
    checked,
    onDelete,
    onUpdate,
    isEditing,
    selectBook,
  } = props;
  const toggleReadStatus = () => {
    onUpdate(id, { checked: !checked });
  };
  return (
    <>
      <li className="list-item">
        <p className="card-book-name">{title}</p>
        <p className="card-book-autor">{author}</p>
        <p className="card-page-number">{pages}</p>
        <div className="card-btn">
          <button
            type="button"
            className="btn-read-un"
            onClick={toggleReadStatus}
          >
            {!checked ? "Unread ❌" : "Read ✔️"}
          </button>
          <button
            type="button"
            className="btn-delete"
            onClick={() => onDelete(id)}
          >
            Delete Book
          </button>
          <button
            type="button"
            className="btn-edit"
            onClick={() => {
              isEditing();
              selectBook(id);
            }}
          >
            Edit
          </button>
        </div>
      </li>
    </>
  );
};
export default Book;
