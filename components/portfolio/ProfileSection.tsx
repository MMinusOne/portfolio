"use client";

import React from "react";
import CountUp from "react-countup";
import { StatCard } from "./StatCard";
import { LocationWeather } from "./LocationWeather";
import { ContactBar } from "./ContactBar";

export const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 bg-slate-950 w-full max-md:max-w-full min-h-[975px]">
      <div className="flex flex-col items-end self-stretch my-auto rounded-none w-[1223px] min-w-60">
        <div className="w-full max-w-[1166px] max-md:max-w-full">
          <div className="flex max-md:flex-col gap-5">
            <div className="max-md:ml-0 w-[27%] max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2daa716e3cc501cad85515f1daee62cbeca51d01297e1dd8655c45e672e649f3"
                className="shadow-sm max-md:mt-10 rounded-[40px] w-full object-contain aspect-square"
                alt="Profile"
              />
            </div>
            <div className="ml-5 max-md:ml-0 w-[73%] max-md:w-full">
              <div className="flex flex-col mt-4 max-md:mt-10 max-md:max-w-full text-slate-200 text-opacity-90">
                <div className="self-start font-bold text-4xl">MMinusOne</div>
                <div
                  className="max-md:max-w-full text-3xl"
                  style={{
                    fontFamily:
                      "Ubuntu, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  <span className="font-medium">Im a </span>
                  <span className="font-medium text-blue-500">
                    Fullstack Developer & IT specialist & Retail AlgoTrader
                  </span>
                </div>
                <div className="mt-9 mr-16 max-md:mr-2.5 max-md:max-w-full text-2xl">
                  Full-stack developer specializing in MERN and Electron apps. I
                  build algorithmic trading systems, work with robotics, and
                  provide IT support and repairs
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="self-start mt-12 max-md:mt-10 w-full max-md:max-w-full max-w-6xl">
          <div className="flex max-md:flex-col gap-5">
            <div className="max-md:ml-0 w-[52%] max-md:w-full">
              <div className="mt-1.5 max-md:mt-7 w-full max-md:max-w-full">
                <LocationWeather />
              </div>
            </div>
            <div className="ml-5 max-md:ml-0 w-[24%] max-md:w-full">
              <div className="relative flex flex-col justify-center items-center px-5 py-12 min-h-[266px]">
                <div className="z-0 absolute inset-0 self-start bg-slate-950 bg-opacity-60 shadow-[0px_4px_4px_rgba(30,41,59,0.25)] rounded-[40px] w-[266px] min-h-[266px] aspect-square" />
                <div className="z-10 text-slate-200 text-2xl text-opacity-80">
                  Commits this Month
                </div>
                <div className="z-10 mt-6 text-slate-200 max-md:text-4xl text-6xl text-opacity-80">
                  <CountUp end={300} duration={4} />
                </div>
                <div className="z-10 mt-6 text-slate-200 text-2xl text-opacity-80">
                  commits
                </div>
              </div>
            </div>
            <div className="ml-5 max-md:ml-0 w-[24%] max-md:w-full">
              <StatCard
                title="Typing Speed"
                value="110WPM"
                subtitle="top 3% of writers"
                className="max-md:mt-6"
              />
            </div>
          </div>
        </div>

        <ContactBar />
      </div>
    </div>
  );
};
