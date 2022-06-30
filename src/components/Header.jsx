export default function Header() {
  return (
    <div className="custom-gradient outline-sky-500 text-white grid grid-cols-3 md:grid-cols-6 gap-4 bg-sky-500 rounded-t-lg h-16 text-center sticky top-0 shadow-md px-7 font-bold">
      <p className="my-auto">Date</p>
      <p className="my-auto">Hour</p>
      <p className="my-auto">Weather</p>
      <p className="my-auto hidden md:block">Humidity</p>
      <p className="my-auto hidden md:block">Temperature</p>
      <p className="my-auto hidden md:block">Wind</p>
    </div>
  );
}
