import NextImage from "next/image";

export const ProfileHeader: React.FC = () => {
    return (
      <div className="flex max-md:flex-col gap-5">
        <div className="max-md:ml-0 w-[27%] max-md:w-full">
          <NextImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2daa716e3cc501cad85515f1daee62cbeca51d01297e1dd8655c45e672e649f3"
            width={1000}
            height={1000}
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
              <span className="font-medium">I'm a </span>
              <span className="font-medium text-blue-500">
                Fullstack Developer & IT specialist & Retail AlgoTrader
              </span>
            </div>
            <div className="mt-9 mr-16 max-md:mr-2.5 max-md:max-w-full text-2xl">
              Full-stack developer specializing in MERN and Electron apps. I build
              algorithmic trading systems, work with robotics, and provide IT
              support and repairs
            </div>
          </div>
        </div>
      </div>
    );
  };