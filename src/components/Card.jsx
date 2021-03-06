import moment from "moment";
import "moment/locale/id";

export default function TemperatureCard(data) {
  return (
    <div className="flex flex-col px-2 md:px-10 mx-auto bg-gradient text-white w-full py-10">
      <div className="flex mx-auto">
        <p className="text-2xl font-bold my-auto">{data.name}</p>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt="weather"
          className="w-12 h-12 mx-2"
        />
      </div>
      <p className="text-8xl font-bold mx-auto">
        {data.main.feels_like.toFixed()}&deg;C
      </p>
      <p className="text-2xl font-bold my-auto mx-auto">
        {data.weather[0].description}
      </p>
    </div>
  );
}

export function WideCard(day) {
  moment.locale("id");
  return (
    <div
      key={day.dt}
      className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 bg-blue-200 rounded-lg h-16 text-center font-semibold px-4 mx-3"
    >
      <p className="my-auto">{moment(day.dt_txt).format("DD MMMM")}</p>
      <p className="my-auto">{moment(day.dt_txt).format("HH:mm")}</p>
      <div className="flex flex-row justify-center">
        <img
          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
          alt="weather icon"
          className="h-10 w-10 my-auto"
        />
        <p className="my-auto mx-2">{day.weather[0].main}</p>
      </div>
      <p className="my-auto hidden md:block">{day.main.humidity}%</p>
      <p className="my-auto hidden md:block">
        {day.main.feels_like.toFixed()}°C
      </p>
      <p className="my-auto hidden md:block">{day.wind.speed} m/s</p>
    </div>
  );
}

export function WeatherStatus(props) {
  const { label, value } = props;
  return (
    <div className="flex flex-row md:flex-col border-separate border bg-white rounded-lg h-14 justify-between px-10">
      <p className="my-auto text-base">{label}</p>
      <p className="my-auto md:text-lg font-semibold">{value}</p>
    </div>
  );
}
