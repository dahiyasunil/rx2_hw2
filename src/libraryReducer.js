const initialState = {
  books: [],
  totalBooks: 0,
};

export const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.isbn != action.payload),
      };
    case "CALCULATE_TOTAL_BOOKS":
      return {
        ...state,
        totalBooks: state.books.length,
      };
    default:
      return state;
  }
};
