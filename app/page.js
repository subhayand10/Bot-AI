"use client";
import LeftSideBar from "./components/LeftSideBar";
import { useState } from "react";
import MainArea from "./components/MainArea";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const hideSideBar=()=>{
    setShowSidebar(false);
    console.log("clicked");
  }
  return (
    <div className="flex">
      <LeftSideBar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <MainArea hideSideBar={hideSideBar}/>
    </div>
  );
}
