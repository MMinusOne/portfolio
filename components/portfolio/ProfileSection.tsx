import React from "react";
import { StatCard } from "./StatCard";
import { LocationWeather } from "./LocationWeather";
import { ContactBar } from "./ContactBar";

export const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center w-full bg-slate-950 min-h-[975px] max-md:max-w-full">
      <div className="flex flex-col items-end self-stretch my-auto rounded-none min-w-60 w-[1223px]">
        <div className="w-full max-w-[1166px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[27%] max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2daa716e3cc501cad85515f1daee62cbeca51d01297e1dd8655c45e672e649f3"
                className="object-contain w-full shadow-sm aspect-square rounded-[40px] max-md:mt-10"
                alt="Profile"
              />
            </div>
            <div className="ml-5 w-[73%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-4 text-slate-200 text-opacity-90 max-md:mt-10 max-md:max-w-full">
                <div className="self-start text-4xl font-bold">MMinusOne</div>
                <div
                  className="text-3xl max-md:max-w-full"
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
                <div className="mt-9 mr-16 text-2xl max-md:mr-2.5 max-md:max-w-full">
                  Full-stack developer specializing in MERN and Electron apps. I
                  build high-frequency trading systems, work with robotics, and
                  provide IT support and repairs
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="self-start mt-12 w-full max-w-6xl max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[52%] max-md:ml-0 max-md:w-full">
              <div className="mt-1.5 w-full max-md:mt-7 max-md:max-w-full">
                <LocationWeather />
              </div>
            </div>
            <div className="ml-5 w-[24%] max-md:ml-0 max-md:w-full">
              <div className="relative flex flex-col justify-center items-center px-5 py-12 min-h-[266px]">
                <div className="absolute inset-0 z-0 self-start aspect-square bg-slate-950 bg-opacity-60 min-h-[266px] rounded-[40px] shadow-[0px_4px_4px_rgba(30,41,59,0.25)] w-[266px]" />
                <div className="z-10 text-2xl text-slate-200 text-opacity-80">
                  Commits this Month
                </div>
                <div className="z-10 mt-6 text-6xl text-slate-200 text-opacity-80 max-md:text-4xl">
                  300
                </div>
                <div className="z-10 mt-6 text-2xl text-slate-200 text-opacity-80">
                  commits
                </div>
              </div>
            </div>
            <div className="ml-5 w-[24%] max-md:ml-0 max-md:w-full">
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
