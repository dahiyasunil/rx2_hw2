import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, calculateTotalBooks } from "../actions.js";

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const bookData = {
      title: title,
      author: author,
      isbn: isbn,
    };
    dispatch(addBook(bookData));
    dispatch(calculateTotalBooks());
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  return (
    <section>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          required
        />
        <input
          type="text"
          placeholder="ISBN"
          onChange={(e) => setIsbn(e.target.value)}
          value={isbn}
          required
        />
        <button type="submit">Add book</button>
      </form>
    </section>
  );
};

export default AddBook;
