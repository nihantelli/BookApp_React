import { createContext, useContext, useState, useEffect } from "react";

const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const [show, setShow] = useState(false);
  const addFavourites = (book) => {
    setFavourites([...favourites, book]);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  const deleteFavourites = (book) => {
    const newList = favourites.filter((b) => b.id !== book.id);
    setFavourites(newList);
  };
  useEffect(() => {
    const data = localStorage.getItem("favourites");
    setFavourites(JSON.parse(data));
  }, []);
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <BookContext.Provider
      value={{ favourites, addFavourites, deleteFavourites, show, setShow }}
    >
      {children}
    </BookContext.Provider>
  );
};
export const useBook = () => {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error("BookContext is not defined");
  }
  return context;
};

export default BookContextProvider;
