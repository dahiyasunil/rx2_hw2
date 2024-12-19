import { useSelector, useDispatch } from "react-redux";
import { calculateTotalBooks, removeBook } from "../actions";

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const totalBooks = useSelector((state) => state.totalBooks);
  return (
    <>
      {totalBooks > 0 && (
        <section>
          <h2>Library Summary</h2>
          <p>
            <strong>Total Books: </strong>
            {totalBooks}
          </p>
          <ul>
            {books.map((book) => (
              <li key={book.isbn}>
                {book.title} by {book.author} (ISBN: {book.isbn})
                <button
                  onClick={() => {
                    dispatch(removeBook(book.isbn));
                    dispatch(calculateTotalBooks());
                  }}
                >
                  <small>Remove</small>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default BooksList;
