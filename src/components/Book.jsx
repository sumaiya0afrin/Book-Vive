import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`/books/${book.bookId}`}>
      <div className="card bg-base-100 border border-[#13131326] p-6">
        <figure className=" bg-base-300 py-8 rounded-3xl">
          <img
            src={book.image}
            alt={book.bookName}
            className="rounded-xl h-[166px]"
          />
        </figure>
        <div className="card-body px-0 pb-0">
          <div className=" space-x-4">
            {book.tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-secondary bg-[#23BE0A0D] border-none px-4 py-2 text-[#23BE0A]"
              >
                <p>{tag}</p>
              </div>
            ))}
          </div>
          <h2 className="card-title">{book.bookName}</h2>
          <p>By: {book.author}</p>
          <div className="border border-dashed my-4"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{book.category}</div>
            <div className="rating space-x-2 items-center">
              <p>{book.rating}</p>
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#23BE0A]"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
