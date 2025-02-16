import React from "react";
import X from "../vectors/X";
import LinkedIn from "../vectors/LinkedIn";
import GitHub from "../vectors/github";
import Envelope from "../vectors/Envelope";
import Phone from "../vectors/Phone";

const ContactBar = () => {
  return (
    <div className="flex flex-wrap gap-7 justify-center items-center self-center mt-40 max-w-full text-2xl text-black min-h-[150px] w-[937px] max-md:mt-10">
      <X />
      <LinkedIn />
      <GitHub />
      <div className="flex gap-7 self-stretch my-auto whitespace-nowrap min-w-60 w-[416px]">
        <Envelope />
        <div className="flex-auto my-auto">michael.business.lb@proton.me</div>
      </div>
      <div className="flex gap-4 self-stretch my-auto w-[236px]">
        <Phone />
        <div className="my-auto basis-auto">+961 70 222 870</div>
      </div>
    </div>
  );
};

export default ContactBar;
