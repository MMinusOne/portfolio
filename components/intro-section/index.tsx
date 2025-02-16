import React from "react";
import ProfileHeader from "./ProfileHeader";
import ContactBar from "./ContactBar";

const IntroSection = () => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="flex flex-wrap gap-10 justify-center items-center w-full bg-zinc-800 min-h-[975px] max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto rounded-none min-w-60 w-[1146px]">
          <div className="max-md:max-w-full">
            <ProfileHeader />
          </div>
          <ContactBar />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
