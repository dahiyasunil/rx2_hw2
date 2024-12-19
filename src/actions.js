export const addBook = (book) => ({
  type: "ADD_BOOK",
  payload: book,
});

export const removeBook = (isbn) => ({
  type: "REMOVE_BOOK",
  payload: isbn,
});

export const calculateTotalBooks = () => ({
  type: "CALCULATE_TOTAL_BOOKS",
});
