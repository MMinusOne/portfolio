import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col px-8 py-12 bg-slate-950 bg-opacity-60 rounded-[40px] shadow-[0px_4px_4px_rgba(30,41,59,0.25)] ${className}`}
    >
      <div className="text-slate-200 text-3xl text-opacity-80">{title}</div>
      <div className="mt-6 text-slate-200 text-5xl text-opacity-80">
        {value}
      </div>
      {subtitle && (
        <div className="self-center mt-6 text-slate-200 text-xl text-opacity-50">
          {subtitle}
        </div>
      )}
    </div>
  );
};
