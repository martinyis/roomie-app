"use client";
import Hobbies from "@/app/componentes/info/Hobbies";
import Rooming from "@/app/componentes/info/Rooming";
import React, { useState } from "react";

type Props = {};

function page({}: Props) {
  const [page, setPage] = useState(1);
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mt-[50px] max-w-[500px] mx-auto flex justify-between">
        <h3 className={`text-[30px] ${page == 1 ? "underline" : ""}`}>
          Hobbies
        </h3>
        <h3 className={`text-[30px] ${page == 2 ? "underline" : ""}`}>
          Rooming
        </h3>
      </div>
      {page == 1 ? (
        <Hobbies
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            setPage(2);
          }}
        />
      ) : (
        <Rooming />
      )}
    </div>
  );
}

export default page;
