"use client";
import Image from "next/image";
import React from "react";
import main_logo from "../../public/assets/main_logo.png";
import QuestionCard from "./QuestionCard";
import CustomInput from "./CustomInput";
import ai_logo from "../../public/assets/ai_logo.png";
import sender_logo from "../../public/assets/sender_logo.png";
import QATabs from "./QATabs";
import getCurrentTime from "../utils/timeFunc";
const noOfCards = [1, 2, 3, 4];
const MainArea = ({ hideSideBar }) => {
  const [asked, setAsked] = React.useState(false);
  const [conversation, setConversation] = React.useState([]);
  const [save, setSave] = React.useState(false);

  React.useEffect(() => {
    console.log(conversation);
  }, [conversation]);

  if (save)
    localStorage.setItem("ConversationHistory", JSON.stringify(conversation));

  return (
    <div onClick={hideSideBar} className="w-[100%] bg-[#D7C7F433]">
      <p className="ml-6 font-ubuntu text-[28px] font-bold leading-32.17 text-[#9785BA]">
        Bot AI
      </p>
      {!asked ? (
        <>
          <div className="mt-[10%] mb-8 font-ubuntu text-28px font-medium leading-32.17px text-center">
            <p>How Can I Help You Today</p>
            <div className="w-[10%] mx-auto">
              <Image src={main_logo} alt="logo" />
            </div>
          </div>
          <div className="sm:w-[95%] w-[100%] sm:mx-auto flex flex-wrap gap-2">
            <QuestionCard
              question={"What's the difference between GET and POST requests?"}
            />
            <QuestionCard question={"Can you explain RESTful APIs?"} />
            <QuestionCard question={"What is a Promise in JavaScript?"} />
            <QuestionCard
              question={"How do you handle errors in async/await?"}
            />
          </div>
        </>
      ) : (
        <>
          {conversation.map((item, index) => {
            return (
              <QATabs
                setConversation={setConversation}
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
        </>
      )}
      <div>
        <CustomInput
          setSave={setSave}
          setConversation={setConversation}
          setAsked={setAsked}
        />
      </div>
    </div>
  );
};

export default MainArea;
