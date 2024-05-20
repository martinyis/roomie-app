"use client";

import React, { useEffect } from "react";
import { universities } from "./universities.js";
import SearchableDropdown from "../ui/SearchableDropdown";
import Register from "./Register";
import MainButton from "../ui/MainButton";
type Props = {};

const Login = (props: Props) => {
  const [page, setPage] = React.useState(0);
  //fetch /animals.js
  const [val, setValue] = React.useState("");
  console.log(universities);
  return (
    <div className="">
      <form action="">
        {page === 0 ? (
          <Register
            changePage={() => {
              setPage(1);
            }}
          />
        ) : page == 1 ? (
          <div className="mt-[126px]">
            <h2 className="text-[32px] text-center">
              First, let’s get your school information
            </h2>
            <div className="mt-[95px]">
              <SearchableDropdown
                options={universities}
                label="name"
                id="id"
                selectedVal={val}
                handleChange={(val) => setValue(val)}
              />
              <form
                action=""
                className="mt-[43px] flex flex-col max-w-[545px] mx-auto gap-[43px]"
              >
                <input
                  type="text"
                  placeholder="School Email"
                  className="p-[10px] text-[14px]"
                />
                <input
                  type="text"
                  placeholder="Confirm email"
                  className="p-[10px] text-[14px]"
                />
              </form>
            </div>
            <div className="flex justify-center mt-[85px]">
              <MainButton
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  console.log("Login button clicked");
                  setPage(2);
                }}
              >
                Next
              </MainButton>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-center max-w-[763px] pt-[150px] mx-auto text-[44px]">
              Looking for the perfect roommate? Now let’s get you started…
            </h3>
            <div className="flex justify-center mt-[85px]">
              <MainButton
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  console.log("Login button clicked");
                  window.location.href = "/rooming";
                }}
              >
                Let's Go
              </MainButton>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
