"use client";
import MainButton from "@/app/componentes/ui/MainButton";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-[44px] text-center mt-[150px] max-w-[546px] mx-auto">
        Start with your screen name for others to see!
      </h1>
      <form
        action=""
        className="mt-[85px] flex flex-col justify-center max-w-[545px] mx-auto gap-[43px]"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-[10px] text-[14px]"
        />
      </form>
      <div className="flex justify-center mt-[85px]">
        <MainButton
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            window.location.href = "/rooming/2";
          }}
        >
          Next
        </MainButton>
      </div>
    </div>
  );
};

export default page;
