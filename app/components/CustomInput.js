import React from "react";
import data from "../data";
import { useToast } from "@/app/components/ui/use-toast";


const CustomInput = ({ setConversation, setAsked,setSave }) => {
  const [text, setText] = React.useState("");
   const { toast } = useToast();

  const generateUniqueId=()=> {
    const now = new Date();

    const year = now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(-2); // Months are zero-based
    const day = ("0" + now.getDate()).slice(-2);
    const hour = ("0" + now.getHours()).slice(-2);
    const minute = ("0" + now.getMinutes()).slice(-2);
    const second = ("0" + now.getSeconds()).slice(-2);
    const millisecond = ("00" + now.getMilliseconds()).slice(-3);

    const randomSegment = Math.random().toString(36).substr(2, 9);

    const uniqueId = `${year}${month}${day}${hour}${minute}${second}${millisecond}-${randomSegment}`;
    return uniqueId;
  }

  const getResponseByQuestion = (question) => {
    const faqItem = data.find((item) => item.question == question);
    return faqItem
      ? {ans:faqItem.response,id:faqItem.id}
      : {ans:"As an AI Language Model, I don’t have the details",id:generateUniqueId()};
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
      <button
        onClick={() => {
          setSave(true);
          toast({
            title: "Success",
            description: "Saved Successfully",
          });
        }}
        className="px-[2%] bg-[#D7C7F4] font-ubuntu text-20px font-normal"
      >
        Save
      </button>
    </div>
  );
};

export default CustomInput;
