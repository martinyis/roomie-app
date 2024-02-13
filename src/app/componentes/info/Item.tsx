"use client";
import React from "react";
import { useState } from "react";
type Props = {
  children: React.ReactNode;
};

function Item({ children }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      className="w-[162px] h-[47px] rounded-[20px] bg-[#C4C4C4] flex items-center justify-center"
      onClick={() => setIsClicked(!isClicked)}
      style={{ backgroundColor: isClicked ? "#FFD7B1" : "#C4C4C4" }}
    >
      {children}
    </button>
  );
}

export default Item;
