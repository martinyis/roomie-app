import Link from "next/link";
import React from "react";

type Props = {};

function NavBar({}: Props) {
  return (
    <div className="bg-white">
      <nav className="max-w-[1440px] mx-auto h-[141px] flex justify-between items-center">
        <div>
          <p className="text-[40px]">Logo</p>
        </div>
        <div className="flex justify-between gap-[37px] items-center">
          <nav>
            <ul className="flex text-[20px] gap-[28px]">
              <li>Schools</li>
              <li>Privacy</li>
              <li>Contact us</li>
            </ul>
          </nav>
          <div className="flex gap-[39px]">
            <button className="w-[136px] h-[47px] bg-[#7CF1B4] flex justify-center items-center text-black text-[20px] rounded-[10px]">
              <Link href="/login">Login</Link>
            </button>
            <button className="w-[136px] h-[47px] bg-[#7CF1B4] flex justify-center items-center text-black text-[20px] rounded-[10px]">
              <Link href="/signup">Sign up</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
