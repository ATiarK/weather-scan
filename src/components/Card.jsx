import moment from "moment";
import "moment/locale/id";

export default function TemperatureCard(data) {
  return (
    <div className="flex flex-col px-2 md:px-10 mx-auto bg-sky-700 text-white w-full py-3 md:py-5">
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
    </div>
  );
}

export function WideCard(day) {
  moment.locale("id");
  return (
    <div
      key={day.dt}
      className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 bg-gray-200 rounded-lg h-16 text-center px-4"
    >
      <p className="my-auto">{moment(day.dt_txt).format("LL")}</p>
      <p className="my-auto">{moment(day.dt_txt).format("HH:mm:ss")}</p>
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
