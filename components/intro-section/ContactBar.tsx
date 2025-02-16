import React from "react";
import X from "../vectors/X";
import LinkedIn from "../vectors/LinkedIn";
import GitHub from "../vectors/github";
import Envelope from "../vectors/Envelope";
import Phone from "../vectors/Phone";

const ContactBar = () => {
  return (
    <div className="flex flex-wrap justify-center items-center self-center gap-7 mt-40 max-md:mt-10 w-[937px] max-w-full min-h-[150px] text-zinc-300 text-2xl">
      <X />
      <LinkedIn />
      <GitHub />
      <div className="flex self-stretch gap-7 my-auto w-[416px] min-w-60 whitespace-nowrap">
        <Envelope />
        <div className="flex-auto my-auto">michael.business.lb@proton.me</div>
      </div>
      <div className="flex self-stretch gap-4 my-auto w-[236px]">
        <Phone />
        <div className="my-auto basis-auto">+961 70 222 870</div>
      </div>
    </div>
  );
};

export default ContactBar;
