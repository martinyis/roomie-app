"use client";
import MainButton from "@/app/componentes/ui/MainButton";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const [name, setName] = React.useState("");
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-[44px] text-center mt-[150px] max-w-[746px] mx-auto">
        Start with your current UNH Starrez screen name for others to see!
      </h1>
      <form
        action=""
        className="mt-[85px] flex flex-col justify-center max-w-[545px] mx-auto gap-[43px]"
      >
        <input
          type="text"
          placeholder="Your screen name"
          className="p-[10px]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <div className="flex justify-center mt-[85px]">
        <MainButton
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            window.location.href = "/rooming/2";
            //save anme to lcoalstorge
            localStorage.setItem("name", name);
          }}
        >
          Next
        </MainButton>
      </div>
    </div>
  );
};

export default page;
