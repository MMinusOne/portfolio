import React from "react";
import Image from "next/image";

export const LocationWeather: React.FC = () => {
  return (
    <div className="px-9 pt-3.5 pb-12 bg-slate-950 bg-opacity-60 rounded-[40px] shadow-[0px_4px_4px_rgba(30,41,59,0.25)] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mt-2 text-2xl text-slate-200 text-opacity-70 max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/398b901e9c2003ed0d7cb34dbc105cca413dbb3a77cb81114a8e74037b39d88e"
              className="object-contain self-center max-w-full aspect-square w-[159px]"
              alt="Location icon"
            />
            <div className="mt-2">Lebanon, Bdadoun</div>
          </div>
        </div>
        <div className="ml-5 w-[44%] max-md:ml-0 max-md:w-full">
          <div className="grow text-2xl text-slate-200 text-opacity-70 max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1263904159b8b9a679eb333322345e98c9040f4a5dc2b0c2fd03e414b2141aa"
              className="object-contain aspect-square w-[173px]"
              alt="Weather icon"
            />
            <div className="max-md:mr-2.5">Weathery, 23°</div>
          </div>
        </div>
      </div>
    </div>
  );
};
