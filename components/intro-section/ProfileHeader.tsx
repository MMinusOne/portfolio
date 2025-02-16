import React from "react";
import NextImage from "next/image";

const ProfileHeader = () => {
  return (
    <div className="flex max-md:flex-col gap-5">
      <div className="max-md:ml-0 w-[27%] max-md:w-full">
        <NextImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true"
          width={1000}
          height={1000}
          className="shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-7 rounded-[40px] w-full object-contain aspect-square"
          alt="Profile"
        />
      </div>
      <div className="ml-5 max-md:ml-0 w-[73%] max-md:w-full">
        <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full text-zinc-300">
          <h1 className="self-start font-bold text-4xl">MMinusOne</h1>
          <div className="mt-5 max-md:max-w-full font-ubuntu text-3xl">
            <span>Im a </span>
            <span className="text-zinc-500">
              Fullstack Developer & IT specialist & Retail AlgoTrader
            </span>
          </div>
          <p className="mt-5 mr-16 max-md:mr-2.5 max-md:max-w-full text-2xl">
            Full-stack developer specializing in MERN and Electron apps. I build
            algorithmic trading systems, work with robotics, and provide IT
            support and repairs
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
