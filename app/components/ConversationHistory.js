import React, { useEffect, useState } from "react";
import QATabs from "./QATabs";
import CustomInput from "./CustomInput";
import ai_logo from "../../public/assets/ai_logo.png";
import sender_logo from "../../public/assets/sender_logo.png";
import getCurrentTime from "../utils/timeFunc";
const ConversationHistory = ({ hideSideBar }) => {
  const [history, setHistory] = useState(() => {
    if (typeof window !== "undefined") {
      const storedHistory = localStorage.getItem("ConversationHistory");
      return storedHistory ? JSON.parse(storedHistory) : [];
    }
    return [];
  });

  useEffect(() => {
    console.log(history);
  }, [history]);

  return (
    <div onClick={hideSideBar} className="w-[100%] bg-[#D7C7F433]">
      <p className="mt-[10%] text-center mb-[5%] font-ubuntu text-[28px] font-normal leading-8 ">
        Conversation History
      </p>
      <p className="ml-[3%] mb-2 font-ubuntu text-[20px] font-normal leading-5 ">
        Today's Chats
      </p>
      {history.map((item, index) => {
        return (
          <QATabs
            spacing={
              index !== history.length - 1 && index % 2 === 1 ? "mb-4" : ""
            }
            historyPage={true}
            key={index}
            id={item.answer && item.answer.id ? item.answer.id : "Q"}
            img={item.question ? sender_logo : ai_logo}
            sender={item.question ? "You" : "Soul AI"}
            content={item.question ? item.question : item.answer.ans}
            feedbackContent={
              item.answer && item.answer.ans && item.feedback
                ? item.feedback
                : ""
            }
            time={getCurrentTime}
          />
        );
      })}
      {/* <div>
        <CustomInput setConversation={setConversation} setAsked={setAsked} />
      </div> */}
    </div>
  );
};

export default ConversationHistory;
