import React, { useState } from "react";
const EditMode = (props) => {
  const { id, title, author, pages, onUpdate, isEditing, resetBook } = props;
  const [editTitle, setEditTitle] = useState(title);
  const [editAuthor, setEditAuthor] = useState(author);
  const [editPages, setEditPages] = useState(pages);
  const finishEditing = (e) => {
    e.preventDefault();
    onUpdate(id, {
      title: editTitle,
      author: editAuthor,
      pages: editPages,
    });
    isEditing(false);
  };
  return (
    <>
      <form className="list-item" onSubmit={finishEditing}>
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
        <button type="submit" className="btn-edit">
          Finish Editing
        </button>
      </form>
    </>
  );
};
export default EditMode;
