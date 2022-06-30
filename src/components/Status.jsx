export default function WeatherStatus(props) {
  const { label, value } = props;
  return (
    <div className="flex flex-row md:flex-col border-separate border bg-white rounded-lg h-14 justify-between px-10">
      <p className="my-auto text-base">{label}</p>
      <p className="my-auto md:text-lg font-semibold">{value}</p>
    </div>
  );
}
