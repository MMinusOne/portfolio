export const WeatherDisplay: React.FC = () => {
    return (
      <div className="relative flex flex-col justify-center items-center px-5 py-12 min-h-[266px]">
        <div className="z-0 absolute inset-0 self-start bg-slate-950 bg-opacity-60 shadow-[0px_4px_4px_rgba(30,41,59,0.25)] rounded-[40px] w-[266px] min-h-[266px] aspect-square" />
        <div className="z-10 text-slate-200 text-2xl text-opacity-80">
          Current Weather
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1263904159b8b9a679eb333322345e98c9040f4a5dc2b0c2fd03e414b2141aa"
          className="z-10 mt-2 w-24 h-24 object-contain"
          alt="Weather icon"
        />
        <div className="z-10 mt-4 text-slate-200 text-4xl text-opacity-80">
          23°C
        </div>
        <div className="z-10 mt-2 text-slate-200 text-xl text-opacity-50">
          Sunny
        </div>
      </div>
    );
  };