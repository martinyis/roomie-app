"use client";
import Image from "next/image";
import React from "react";
import Confetti from "react-confetti";
type Props = {};

function page({}: Props) {
  const [showConfetti, setShowConfetti] = React.useState(false);

  //show confetting only for 5 seconds
  React.useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  }, []);
  return (
    <>
      {showConfetti && <Confetti width={1700} height={600} />}
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-[64px] text-center mt-[40px]">
          You Found Matches!
        </h1>
        <div className="max-w-[1000px] mx-auto flex gap-[30px] mt-[40px]">
          <div className="flex gap-[10px]">
            <div className="rounded-[10px]">
              <Image
                className="rounded-[10px]"
                src="/profile.jpeg"
                alt="Profile"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col gap-[15px]">
              <button
                className="w-[220px] h-[50px] flex items-center justify-center bg-[#FFD9B5] rounded-[25px] 
              hover:bg-[#FFC68D] transition-all duration-300 ease-in-out focus:outline-none"
                onClick={() => {
                  console.log("View button clicked");
                  window.location.href = "/match";
                }}
              >
                View
              </button>
              <button
                className="w-[220px] h-[50px] flex items-center justify-center bg-[#FFD9B5] rounded-[25px] 
              hover:bg-[#FFC68D] transition-all duration-300 ease-in-out focus:outline-none"
              >
                Connect
              </button>
              <button
                className="w-[220px] h-[50px] flex items-center justify-center bg-[#FFD9B5] rounded-[25px] 
              hover:bg-[#FFC68D] transition-all duration-300 ease-in-out focus:outline-none"
              >
                Message
              </button>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div className="rounded-[10px]">
              <Image
                className="rounded-[10px]"
                src="/profile.jpeg"
                alt="Profile"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col gap-[15px]">
              <button
                className="w-[220px] h-[50px] flex items-center justify-center bg-[#FFD9B5] rounded-[25px] 
              hover:bg-[#FFC68D] transition-all duration-300 ease-in-out focus:outline-none"
                onClick={() => {
                  console.log("View button clicked");
                  window.location.href = "/match";
                }}
              >
                View
              </button>
              <button
                className="w-[220px] h-[50px] flex items-center justify-center bg-[#FFD9B5] rounded-[25px] 
              hover:bg-[#FFC68D] transition-all duration-300 ease-in-out focus:outline-none"
              >
                Connect
              </button>
              <button
                className="w-[220px] h-[50px] flex items-center justify-center bg-[#FFD9B5] rounded-[25px] 
              hover:bg-[#FFC68D] transition-all duration-300 ease-in-out focus:outline-none"
              >
                Message
              </button>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[2px] bg-[#000000] mt-[70px]"></div>
        <div className="max-w-[1000px] mx-auto flex gap-[30px] mt-[40px] items-center">
          <div className="flex gap-[10px]">
            <div className="rounded-[10px]">
              <Image
                className="rounded-[10px]"
                src="/profile.jpeg"
                alt="Profile"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col gap-[15px]">
              <button
                className="w-[220px] h-[50px] flex items-center justify-center bg-[#FFD9B5] rounded-[25px] 
              hover:bg-[#FFC68D] transition-all duration-300 ease-in-out focus:outline-none"
                onClick={() => {
                  console.log("View button clicked");
                  window.location.href = "/match";
                }}
              >
                View
              </button>
              <button
                className="w-[220px] h-[50px] flex items-center justify-center bg-[#FFD9B5] rounded-[25px] 
              hover:bg-[#FFC68D] transition-all duration-300 ease-in-out focus:outline-none"
              >
                Connect
              </button>
              <button
                className="w-[220px] h-[50px] flex items-center justify-center bg-[#FFD9B5] rounded-[25px] 
              hover:bg-[#FFC68D] transition-all duration-300 ease-in-out focus:outline-none"
              >
                Message
              </button>
            </div>
          </div>
          <Image src="/ring.png" alt="ring" width={400} height={400} />
        </div>
      </div>
    </>
  );
}

export default page;
