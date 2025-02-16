import React from "react";
import Image from "next/image";

const ProfileHeader = () => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="w-[27%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a683cb9736418b91fc4be3c320a3f15fa2b322bb7bcaf4e2b6eb06665d7ddd96?placeholderIfAbsent=true"
          className="object-contain w-full aspect-square rounded-[40px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-7"
          alt="Profile"
        />
      </div>
      <div className="ml-5 w-[73%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
          <h1 className="self-start text-4xl font-bold">MMinusOne</h1>
          <div className="mt-5 text-3xl max-md:max-w-full font-ubuntu">
            <span>Im a </span>
            <span className="text-zinc-500">
              Fullstack Developer & IT specialist & Retail AlgoTrader
            </span>
          </div>
          <p className="mt-5 mr-16 text-2xl max-md:mr-2.5 max-md:max-w-full">
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
