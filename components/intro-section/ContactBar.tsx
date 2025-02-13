import React from "react";
import LinkedIn from "../vectors/LinkedIn";
import X from "../vectors/X";
import Github from "../vectors/github";
import Envelope from "../vectors/Envelope";
import Phone from "../vectors/Phone";

export const ContactBar: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-7 max-md:mt-10 max-md:mr-2.5 text-slate-200 text-2xl text-opacity-70">
      <LinkedIn className="hover:opacity-90 hover:scale-110 transition-all duration-200 cursor" />
      <X className="hover:opacity-90 hover:scale-110 transition-all duration-200 cursor" />
      <Github className="hover:opacity-90 hover:scale-110 transition-all duration-200 cursor" />
      <div className="flex justify-center items-center gap-4 hover:opacity-90 hover:scale-105 transition-all duration-200 cursor">
        <Envelope />
        <div className="flex-auto my-auto cursor-pointer">
          michael.business.lb@proton.me
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 hover:opacity-90 hover:scale-105 transition-all duration-200 cursor">
        <Phone />
        <div className="my-auto cursor-pointer basis-auto">+961 70 222 870</div>
      </div>
    </div>
  );
};
