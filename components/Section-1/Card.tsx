export default function Card(props: {
  title: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col justify-center items-center px-5 py-12 min-h-[266px]">
      <div className="z-0 absolute inset-0 self-start bg-slate-950 bg-opacity-60 shadow-[0px_4px_4px_rgba(30,41,59,0.25)] rounded-[40px] w-[266px] min-h-[266px] aspect-square" />
      <div className="z-10 text-slate-200 text-2xl text-opacity-80">
        {props.title}
      </div>
      <div className="z-10 mt-6 text-[3.5rem] text-slate-200 max-md:text-4xl text-center text-opacity-80 truncate">
        {props.children}
      </div>
      <div className="z-10 mt-6 text-slate-200 text-2xl text-opacity-80">
        {props.footer}
      </div>
    </div>
  );
}
