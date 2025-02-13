export default function Card(props: {
  title: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="relative inset-0 flex flex-col justify-center items-center self-center bg-slate-950 bg-opacity-60 shadow-[0px_4px_4px_rgba(30,41,59,0.25)] p-4 rounded-[40px] w-70 h-70 min-h-70 aspect-square hover:scale-110 transition-all duration-100 cursor-pointer">
      <div className="text-slate-200 text-2xl text-opacity-80">
        {props.title}
      </div>
      <div className="mt-6 text-[3.5rem] text-slate-200 max-md:text-4xl text-center text-opacity-80 truncate">
        {props.children}
      </div>
      <div className="mt-6 text-slate-200 text-2xl text-opacity-80">
        {props.footer}
      </div>
    </div>
  );
}
