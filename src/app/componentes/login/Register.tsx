import React from "react";
import MainButton from "../ui/MainButton";

type Props = {
  changePage: () => void;
};

const Register = ({ changePage }: Props) => {
  return (
    <div className="max-w-[1000px] mx-auto mt-[200px]">
      <h1 className="text-[44px] mb-[50px]">Choose a username and password</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="p-4 rounded-[20px] outline-none border-2 border-black"
        />
        <div className="flex flex-col rounded-[20px]">
          <input
            type="password"
            placeholder="Password"
            className="p-4 outline-none rounded-t-[20px] border-2 border-black border-b-0"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-4 outline-none rounded-b-[20px] border-2 border-black"
          />
        </div>
      </form>
      <div className="mt-[80px] flex justify-center">
        <MainButton
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            console.log("Register button clicked");
            changePage();
          }}
        >
          Register
        </MainButton>
      </div>
    </div>
  );
};

export default Register;
