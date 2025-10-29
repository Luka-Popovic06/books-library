import React, { useState, useEffect } from "react";
const Book = (props) => {
  const {} = props;
  return (
    <>
      <li className="list-item">
        <p className="card-book-name"></p>
        <p className="card-book-autor"></p>
        <p className="card-page-number"></p>
        <div className="card-btn">
          <button type="button" className="btn-read-un"></button>
          <button type="button" className="btn-delete">
            Delete Book
          </button>
          <button type="button" className="btn-edit">
            Edit
          </button>
        </div>
      </li>
    </>
  );
};
export default Book;
