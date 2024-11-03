import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredList, getStoredWishList } from "./AddToRead";
import ReadBook from "./ReadBook";
import { MdKeyboardArrowDown } from "react-icons/md";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState(" ");
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

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "Ratings") {
      const sortedRatings = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedRatings);
    } else if (sort === "Number of Pages") {
      const sortedPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedPages);
    } else {
      const sortedYear = [...readList].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setReadList(sortedYear);
    }
  };
  return (
    <div>
      <div className="bg-base-200 rounded-2xl">
        <h3 className="text-2xl font-bold text-center py-6">Books</h3>
      </div>
      <div className="flex justify-center my-8">
        <details className="dropdown">
          <summary className="btn m-1 bg-[#23BE0A] text-white border-none">
            {sort ? (
              <>
                Sort By {sort} <MdKeyboardArrowDown />
              </>
            ) : (
              "Sort By"
            )}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleSort("Ratings")}>
              <a>Ratings</a>
            </li>
            <li onClick={() => handleSort("Number of Pages")}>
              <a>Number of Pages</a>
            </li>
            <li onClick={() => handleSort("Publish Year")}>
              <a>Publisher Year</a>
            </li>
          </ul>
        </details>
      </div>
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
