"use client";
import Image from "next/image";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mx-auto flex items-center mt-[30px] justify-center gap-[30px]">
        <p className="text-[52px]">Best Match</p>
        <Image src="/ring.png" alt="ring" width={200} height={200} />
      </div>
      <div className="flex justify-center gap-[200px]">
        <div>
          <Image
            className="rounded-[10px]"
            src="/profile.jpeg"
            alt="Profile"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col gap-[100px] justify-center">
          <button className="w-[300px] h-[50px] text-[28px] flex items-center justify-center rounded-[20px] bg-[#7CF1B4]">
            Connect
          </button>
          <button className="w-[300px] h-[50px] text-[28px] flex items-center justify-center rounded-[20px] bg-[#7CF1B4]">
            Message
          </button>
        </div>
      </div>
      <div className="mt-[50px] flex gap-[40px] justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[24px]">Interests/Hobbies</p>
          <Image src="/ring96.png" alt="ring" width={200} height={200} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[24px]">Interests/Hobbies</p>
          <Image src="/ring.png" alt="ring" width={200} height={200} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[24px]">Interests/Hobbies</p>
          <Image src="/ring.png" alt="ring" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}

export default page;
