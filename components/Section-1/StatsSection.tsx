import CountUp from "react-countup";
import Card from "./Card";

export const StatsSection: React.FC = () => {
  return (
    <div className="max-md:hidden flex justify-center items-center gap-5">
      <div className="max-md:ml-0 max-md:w-full">
        <Card title="Time" footer="Lebanon, Beirut">
          {new Date()
            .toLocaleTimeString("en-US", {
              timeZone: "Asia/Beirut",
              hour: "2-digit",
              minute: "2-digit",
            })
            .replaceAll(" ", "")}
        </Card>
      </div>
      <div className="ml-5 max-md:ml-0 max-md:w-full">
        <Card title="Commits This Month" footer="Commits">
          <CountUp end={300} duration={4} />
        </Card>
      </div>
      <div className="ml-5 max-md:ml-0 max-md:w-full">
        <Card title="Typing Speed" footer="top 3% globally">
          <CountUp end={110} duration={4} suffix="WPM" />
        </Card>
      </div>
    </div>
  );
};
