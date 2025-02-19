"use client"
import Button from "@/components/StartButton";
import Link from "next/link"

const Home = () => {
  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bggif.gif')" }}
      >
        <span className="text-white text-2xl">
          Welcome to my portfolio! I am Candela Villaverde 👾
        </span>

      </div>

      <div className="text-center -mt-20 shadow-lg">
        <Link href={"/about"}>
          <Button/>
        </Link>

      </div>
    </>
  )
}
export default Home;