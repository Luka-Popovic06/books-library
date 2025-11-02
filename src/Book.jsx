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
};
export default Book;
