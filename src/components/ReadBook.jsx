import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiUsers } from "react-icons/hi2";
import { HiDocumentChartBar } from "react-icons/hi2";

const ReadBook = ({ book }) => {
  return (
    <>
      <div className="card bg-base-100 border border-[#13131326] p-6 grid grid-cols-3 gap-4 ">
        <figure className=" bg-base-300 py-8 rounded-3xl">
          <img
            src={book.image}
            alt={book.bookName}
            className="rounded-xl h-[166px]"
          />
        </figure>
        <div className="card-body p-0 col-span-2 space-y-2">
          <h2 className="card-title">{book.bookName}</h2>
          <p className="flex-grow-0">By: {book.author}</p>
          <div className=" space-x-4 flex items-center">
            <strong>Tag:</strong>
            {book.tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-secondary bg-[#23BE0A0D] border-none px-4 py-2 text-[#23BE0A]"
              >
                <p>#{tag}</p>
              </div>
            ))}
            <p className="flex items-center">
              <CiLocationOn className="text-xl" />
              Year of Publishing: {book.yearOfPublishing}
            </p>
          </div>

          <div className=" space-x-4 flex items-center">
            <p className="flex items-center flex-grow-0">
              <HiUsers className="text-xl" />
              Publisher: {book.publisher}
            </p>
            <p className="flex-grow-0 flex items-center">
              <HiDocumentChartBar />
              Pages: {book.totalPages}
            </p>
          </div>
          <div className="border border-dashed my-4"></div>
          <div className="card-actions">
            <div className="badge badge-outline badge-info">
              Category: {book.category}
            </div>
            <div className="badge badge-outline badge-warning">
              Rating: {book.rating}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBook;
