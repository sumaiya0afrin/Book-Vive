import React from "react";
import bannerImage from "../assets/banner.png";
import Button from "./Button";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[554px] rounded-3xl">
      <div className="hero-content w-4/5 flex-col justify-between lg:flex-row-reverse">
        <img src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-8">
          <h1 className="text-5xl font-bold leading-snug playfair-display">
            Books to freshen up <br /> your bookshelf
          </h1>

          <Button text="View The List"></Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
