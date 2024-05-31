import Image from "next/image";
import React from "react";
import thumbs_up from "../../public/assets/thumbs_up.png";
import thumbs_down from "../../public/assets/thumbs_down.png";
import { Button } from "@/app/components/ui/button";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import bulb from "../../public/assets/bulb.png";

const QATabs = ({ img, sender, content, time,id,setConversation }) => {
    const [feedback,setFeedback]=React.useState("")
    const handleChange = (e)=>{
        setFeedback(e.target.value);
    }
    const storeFeedback = (e)=>{
        e.preventDefault();
        setConversation((convo)=>{
            return convo.map(item=>{
                if(item.answer&&typeof(item.answer!=="string")&&item.answer.id===id){
                    item.feedback=feedback;
                }
                return item;
            })
        })
    }
  return (
    <div className="w-[95%] mx-auto flex gap-6 p-5 bg-[#D7C7F421]">
      <div>
        <div className="w-[50px] h-[50px]">
          <Image src={img} alt="logo" />
        </div>
      </div>
      <div>
        <p className="font-ubuntu text-[16px] font-bold">{sender}</p>
        <p className="font-open-sans text-[16px] font-normal text-left">
          {content}
        </p>
        <div className="flex gap-3 items-center mt-5 font-open-sans text-[12px] font-normal text-[#0000009E]">
          <p>{time}</p>
          <div
            className={`w-[20px] h-[20px] ${
              sender !== "You" ? "block" : "hidden"
            }`}
          >
            <Image src={thumbs_up} alt="thumbs_up" />
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <div
                className={`w-[20px] h-[20px] ${
                  sender !== "You" ? "block" : "hidden"
                }`}
              >
                <button>
                  <Image src={thumbs_down} alt="thumbs_down" />
                </button>
              </div>
            </DialogTrigger>
            <DialogContent className="w-[766px] h-[335px]">
              <div className="flex gap-2 justify center items-center">
                <div>
                  <Image src={bulb} alt="bulb" />
                </div>
                <DialogHeader>
                  <DialogTitle>Provide Additional Feedback</DialogTitle>
                </DialogHeader>
              </div>
              <div className="grid gap-4 py-4 h-[187px]">
                <div className="grid grid-cols-4 items-center gap-4 h-[100%] w-[100%]">
                  <Input
                    id="username"
                    value={feedback}
                    onChange={handleChange}
                    className="col-span-4 "
                  />
                </div>
              </div>
              <DialogFooter>
                  <Button
                    type="submit"
                    onClick={storeFeedback}
                    className="bg-[#D7C7F4] text-[black]"
                  >
                    Submit
                  </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default QATabs;
