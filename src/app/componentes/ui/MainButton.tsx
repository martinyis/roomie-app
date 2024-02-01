import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
};

const MainButton = ({ children, onClick }: Props) => {
  return (
    <button
      className="w-[449px] h-[53px] bg-[#7CF1B4] flex items-center justify-center text-[24px] rounded-[20px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MainButton;
