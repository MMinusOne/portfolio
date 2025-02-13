import React from "react";

export const ContactBar: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-7 justify-center items-center mt-12 mr-20 text-2xl text-slate-200 text-opacity-70 max-md:mt-10 max-md:mr-2.5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/203ce2f082a38b262e4dfffdab45fd31803c9e3a589018b2b6b4227c87733ee7"
        className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
        alt="Social icon 1"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0095e07af92295302a93d1b02968e8f4d56ac9e866d2e0414b0fba6e29a06f66"
        className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
        alt="Social icon 2"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e72cd32b77c807e496e2c92d29c1199cac6a81771ad0201f15d91d26f6724935"
        className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
        alt="Social icon 3"
      />
      <div className="flex gap-7 self-stretch my-auto whitespace-nowrap min-w-60 w-[416px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe8cf1c52d4f95a85e307b34706864029a4071e909b0103616fa018a2ba44dd2"
          className="object-contain shrink-0 w-10 aspect-square"
          alt="Email icon"
        />
        <div className="flex-auto my-auto">michael.business.lb@proton.me</div>
      </div>
      <div className="flex gap-4 self-stretch my-auto w-[236px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d64f03e0266e050f0334840cb46d7e7af28d9b4e3e77ad64a3f1aaf88568d89"
          className="object-contain shrink-0 w-10 aspect-square"
          alt="Phone icon"
        />
        <div className="my-auto basis-auto">+961 70 222 870</div>
      </div>
    </div>
  );
};
