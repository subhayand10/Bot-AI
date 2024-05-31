import React, { useState } from "react";
import Image from "next/image";
import user_logo from "../../public/assets/user_logo.png";
import edit from "../../public/assets/editPastChat.png";
import hamburger from "../../public/assets/hamburger.png";

const LeftSideBar = ({showSidebar,setShowSidebar}) => {

  return (
    <>
      {/* Hamburger menu */}
      <div className={`block sm:hidden ${showSidebar?"hidden":""}`}>
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-white p-2"
        >
          <Image src={hamburger} alt="hamburger" />
        </button>
      </div>

      {/* Sidebar content */}
      <div
        className={`w-[30%] md:w-[20%]  min-h-screen bg-slate-500  ${
          showSidebar ? "block" : "hidden"
        } sm:block`}
      >
        <div className="New Chat flex justify-evenly items-center mb-2 bg-[#D7C7F4]">
          <div className="mt-2">
            <Image src={user_logo} alt="logo" />
          </div>
          <div>
            <p className="text-[#000000]">New Chat</p>
          </div>
          <div>
            <Image src={edit} alt="edit" />
          </div>
        </div>
        <div className="Past Conversation text-center mx-auto rounded-lg h-[70px] w-[80%] text-[#414146] bg-[#D7C7F4]">
          <button className="h-[100%]">Past Conversation</button>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
