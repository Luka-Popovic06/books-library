import React, { useState, useEffect } from "react";
const Book = (props) => {
  const { id, title, author, pages, checked, onDelete, onUpdate } = props;
  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editAuthor, setEditAuthor] = useState(author);
  const [editPages, setEditPages] = useState(pages);
  const toggleReadStatus = () => {
    onUpdate(id, { checked: !checked });
  };
  const finishEditing = () => {
    onUpdate(id, {
      title: editTitle,
      author: editAuthor,
      pages: editPages,
    });
    setEditMode(false);
  };
  return (
    <>
      <li className="list-item">
        {!editMode ? (
          <>
            <p className="card-book-name">{title}</p>
            <p className="card-book-autor">{author}</p>
            <p className="card-page-number">{pages}</p>
          </>
        ) : (
          <>
            <input
              type="text"
              className="input-mode-edit-name"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <input
              type="text"
              value={editAuthor}
              onChange={(e) => setEditAuthor(e.target.value)}
              className="input-mode-edit-autor"
            />
            <input
              type="text"
              value={editPages}
              onChange={(e) => setEditPages(e.target.value)}
              className="input-mode-edit-pagesnumber"
            />
          </>
        )}

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
            onClick={() => (editMode ? finishEditing() : setEditMode(true))}
          >
            {!editMode ? "Edit" : "Finish Editing"}
          </button>
        </div>
      </li>
    </>
  );
};
export default Book;
