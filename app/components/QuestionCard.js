import React from 'react'

const QuestionCard = ({question}) => {
  return (
    <div className=" w-[100%] sm:w-[49%] h-[111px] mb-3 pl-2 bg-[#FFFFFF] flex flex-col justify-around">
      <p className="font-ubuntu text-20px font-bold leading-22.98px text-black">
        {question}
      </p>
      <p className="font-open-sans text-16px font-normal leading-21.79px">
        Get immediate AI generated reponse
      </p>
    </div>
  );
}

export default QuestionCard