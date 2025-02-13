import CountUp from "react-countup";
import { CommitsCard } from "./CommitsCard";
import { TimeCard } from "./TimeDisplay";
import { WPMCard } from "./WPMCard";

export const StatsSection: React.FC = () => {
  return (
    <div className="flex max-md:flex-col justify-center items-center gap-5">
      <div className="max-md:ml-0 w-[24%] max-md:w-full">
        <TimeCard />
      </div>
      <div className="ml-5 max-md:ml-0 w-[24%] max-md:w-full">
        <CommitsCard />
      </div>
      <div className="ml-5 max-md:ml-0 w-[24%] max-md:w-full">
        <WPMCard />
      </div>
    </div>
  );
};
