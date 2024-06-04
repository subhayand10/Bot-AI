import React from "react";
import Star from "./Star";

const Rating = ({ value, setValue }) => {
  return (
    <div className="flex flex-col">
      <p>Rate this response</p>
      <Star value={value} setValue={setValue} />
    </div>
  );
};

export default Rating;
