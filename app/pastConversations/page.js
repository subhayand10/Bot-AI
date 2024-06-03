"use client";
import { useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import ConversationHistory from "../components/ConversationHistory";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const hideSideBar = () => {
    setShowSidebar(false);
    console.log("clicked");
  };
  return (
    <div className="flex">
      <LeftSideBar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <ConversationHistory hideSideBar={hideSideBar}/>
    </div>
  );
}
