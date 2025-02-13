"use client";

import React from "react";

import { ContactBar } from "./ContactBar";
import { ProfileHeader } from "./ProfileHeader";
import { StatsSection } from "./StatsSection";


export const ProfileSection: React.FC = () => {
  return (
    <div className="relative flex flex-wrap justify-center items-center gap-10 bg-slate-950 w-full max-md:max-w-full min-h-[975px] overflow-hidden">
      <div className="absolute bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 opacity-20 blur-[80px] rounded-full w-[1000px] h-[1000px]" />
      <div className="z-10 relative flex flex-col items-end self-stretch my-auto rounded-none w-[1223px] min-w-60">
        <div className="w-full max-w-[1166px] max-md:max-w-full">
          <ProfileHeader />
        </div>

        <div className="self-start mt-12 max-md:mt-10 w-full max-md:max-w-full max-w-6xl">
          <StatsSection />
        </div>

        <ContactBar />
      </div>
    </div>
  );
};
