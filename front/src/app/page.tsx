"use client";
import Button from "@/components/StartButton";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen relative flex flex-col items-center justify-center">
        <span className="text-white text-5xl relative z-10 p-16 mt-14 text-center">
          Welcome to my portfolio! I am Candela Villaverde 👾
        </span>
      </div>

      <div className="text-center -mt-20 shadow-lg text-3xl">
        <Link href={"/about"}>
          <Button />
        </Link>
      </div>
    </>
  );
};

export default Home;
