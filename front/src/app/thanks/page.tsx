"use client";

import Link from "next/link";
import Button from "@/components/GoAboutButton";

const Thanks = () => {
  return (
    <div className="mt-20 p-6 sm:p-20 text-center">
      <p>Thank you for your message, I will reply as soon as possible! 👾</p>

      <p className="mt-4 text-gray-500">
        In the meantime, check out my{" "}
        <Link href="/projects" className="text-purple-500 underline" aria-label="View my latest projects">
          latest projects
        </Link>
        !
      </p>
      <p className="mt-4">or click here </p>
      <div className="mt-10 flex justify-center items-center">
        <Link href="/about" aria-label="Go to About page">
          <Button />
        </Link>
      </div>

      <div className="mt-10">
  <img
    src="/path/to/animated.gif"
    alt="Exciting animation"
    className="mx-auto w-1/3 h-auto"
  />
</div>

    </div>
  );
};

export default Thanks;
