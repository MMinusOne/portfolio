import CountUp from "react-countup";
import { StatCard } from "../portfolio/StatCard";
import { WeatherDisplay } from "./WeatherDisplay";
import { CommitsCard } from "./CommitsCard";

export const StatsSection: React.FC = () => {
    return (
      <div className="flex max-md:flex-col justify-center items-center gap-5">
        <div className="max-md:ml-0 w-[24%] max-md:w-full">
          <WeatherDisplay />
        </div>
        <div className="ml-5 max-md:ml-0 w-[24%] max-md:w-full">
          <CommitsCard />
        </div>
        <div className="ml-5 max-md:ml-0 w-[24%] max-md:w-full">
          <StatCard
            title="Typing Speed"
            value={<CountUp end={110} duration={4} suffix="WPM" />}
            subtitle="top 3% of writers"
            className="max-md:mt-6"
          />
        </div>
      </div>
    );
  };