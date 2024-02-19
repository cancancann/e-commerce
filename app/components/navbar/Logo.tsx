"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="bg-orange-700 px-2 py-1 rounded-md text-lg md:text-2xl cursor-pointer"
    >
      Burada<span className="text-sm">.com</span>
    </div>
  );
};

export default Logo;
