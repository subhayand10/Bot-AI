import React from "react";

const Feedback = ({ text }) => {
  return (
    <div className="flex gap-2">
      <p className="font-sans text-base font-bold leading-[21.79px] text-left">
        Feedback :
      </p>
      <p className="font-open-sans text-base font-normal leading-[21.79px] text-left">
        {text}
      </p>
    </div>
  );
};

export default Feedback;
