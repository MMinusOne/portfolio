import React from "react";
import ProfileHeader from "./ProfileHeader";
import ContactBar from "./ContactBar";

const IntroSection = () => {
  return (
    <div className="h-full overflow-hidden">
      <div className="flex flex-wrap justify-center items-center gap-10 bg-neutral-800 w-full max-md:max-w-full min-h-full">
        <div className="z-[0] absolute bg-neutral-300 opacity-100 blur-[250px] rounded-full w-[200px] aspect-square"></div>
        <div className="z-10 flex flex-col self-stretch my-auto rounded-none w-[1200px] min-w-60">
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
