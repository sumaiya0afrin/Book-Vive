import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Button2 from "./Button2";
import { addToStoredReadList, addToStoredWishList } from "./AddToRead";

const BookDetail = () => {
  const { bookId } = useParams();

  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);

  const handleRead = (id) => {
    addToStoredReadList(id);
  };

  const handleWishList = (id) => {
    addToStoredWishList(id);
  };
  return (
    <div className="hero min-h-screen mb-10">
      <div className="hero-content items-start flex-col lg:flex-row">
        <img
          src={book.image}
          className="rounded-lg max-w-lg p-20 bg-base-300 w-full h-full"
        />

        <div>
          <h1 className="text-5xl font-bold font-playfair-display">
            {book.bookName}
          </h1>
          <p>
            <strong>By:</strong> {book.author}
          </p>
          <div className="divider my-0"></div>
          <p>{book.category}</p>
          <div className="divider my-0"></div>
          <p className="pb-2">
            <strong>Review:</strong> {book.review}
          </p>

          <div>
            <strong>Tags: </strong>
            {book.tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-secondary bg-[#23BE0A0D] border-none px-4 py-2 text-[#23BE0A]"
              >
                <p> #{tag}</p>
              </div>
            ))}
          </div>
          <div className="divider my-0"></div>

          <div className="overflow-x-auto">
            <table className="table w-3/4 border-separate">
              <tbody>
                <tr>
                  <td>Number of Pages:</td>
                  <td>{book.totalPages}</td>
                </tr>
                <tr>
                  <td>Publisher:</td>
                  <td>{book.publisher}</td>
                </tr>
                <tr>
                  <td>Year of Publishing:</td>
                  <td>{book.yearOfPublishing}</td>
                </tr>
                <tr>
                  <td>Rating:</td>
                  <td>{book.rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-x-3">
            <button
              onClick={() => handleRead(bookId)}
              className="btn bg-white border border-[#1313134D]"
            >
              Read
            </button>
            <button onClick={() => handleWishList(bookId)} className="btn btn2">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
