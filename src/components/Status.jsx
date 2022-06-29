export default function WeatherStatus(props) {
  const { label, value } = props;
  return (
    <div className="flex flex-col border-separate border">
      <p className="">{label}</p>
      <p className="">{value}</p>
    </div>
  );
}
