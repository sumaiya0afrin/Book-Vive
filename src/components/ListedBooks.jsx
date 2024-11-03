import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredList, getStoredWishList } from "./AddToRead";
import ReadBook from "./ReadBook";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    const wishList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );
    setWishList(wishList);
  }, []);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-4 my-8">
            {readList.map((list) => (
              <ReadBook key={list.bookId} book={list}></ReadBook>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="space-y-4 my-8">
            {wishList.map((list) => (
              <ReadBook key={list.bookId} book={list}></ReadBook>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
