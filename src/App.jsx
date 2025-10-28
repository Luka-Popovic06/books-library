import { useState, useEffect } from "react";
import Book from "./Book";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const bookManager = () => {
    const getBooks = () => books;
    const pushBook = (book) => books.push(book);
    const deleteBook = (id) => {
      setBooks((prev) => {
        return prev.filter((book) => book.id !== id);
      });
    };
    const findBook = (id) => books.find((book) => book.id === id);
    return { pushBook, getBooks, deleteBook, findBook };
  };
  const manager = bookManager();

  return (
    <>
      <div className="text-box">
        <h1 className="heading-primary">Book library</h1>
        <p className="text-paragraph">
          Use the button below to add to your library and watch your collection
          grow
        </p>
        <button
          type="button"
          className="btn-new-book"
          onClick={() => setIsVisible(false)}
        >
          New Book
        </button>
      </div>
      <ul className="ul-list">
        {books.map((book) => {
          return <Book />;
        })}
      </ul>
      {!isVisible && (
        <>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-box">
              <label className="label" htmlFor="title">
                Title of the book:
              </label>
              <input
                className="input"
                type="text"
                id="title"
                name="title"
                placeholder="Harry Potter"
                required
              />
            </div>
            <div className="form-box">
              <label className="label" htmlFor="author">
                Author:
              </label>
              <input
                className="input"
                type="text"
                id="author"
                name="author"
                placeholder="J.K Rowling"
                required
              />
            </div>
            <div className="form-box">
              <label className="label" htmlFor="nPages">
                Number of pages:
              </label>
              <input
                className="input"
                type="number"
                id="nPages"
                name="pages"
                placeholder="500"
                required
              />
            </div>
            <div className="check-box">
              <div className="mini-box">
                <input
                  type="checkbox"
                  name="checker"
                  id="checkRead"
                  className="checkRead"
                />
                <label htmlFor="checkRead" className="check-label">
                  Have you read this book?
                </label>
              </div>
              <button type="submit" id="submit" className="submit">
                Submit
              </button>
            </div>
            <button
              className="btn-close"
              type="button"
              onClick={() => setIsVisible(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon"
              >
                <path
                  className="icon"
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
          <div className="overlay"></div>
        </>
      )}
    </>
  );
}

export default App;
