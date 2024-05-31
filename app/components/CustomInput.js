import React from "react";
import data from "../data";

const CustomInput = ({ setConversation, setAsked }) => {
  const [text, setText] = React.useState("");

  const getResponseByQuestion = (question) => {
    const faqItem = data.find((item) => item.question == question);
    return faqItem
      ? {ans:faqItem.response,id:faqItem.id}
      : "As an AI Language Model, I don’t have the details";
  };
  const handleAsk = () => {
    const ans = getResponseByQuestion(text);
    setConversation((conversation) => {
      return [...conversation, { question: text }, { answer: ans }];
    });
    setText("");
    setAsked(true);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="w-[95%] mx-auto flex gap-6">
      <input
        value={text}
        onChange={handleChange}
        type="text"
        className="bg-white border border-[#00000073] w-[80%] h-[41px] rounded-tl-[5px] border-t border-b-0 border-r-0 border-l-0"
      />
      <button
        onClick={handleAsk}
        className="px-[2%] mr-3 bg-[#D7C7F4] font-ubuntu text-20px font-normal"
      >
        Ask
      </button>
      <button className="px-[2%] bg-[#D7C7F4] font-ubuntu text-20px font-normal">
        Save
      </button>
    </div>
  );
};

export default CustomInput;
