import { useState, useEffect } from "react";
import axios from "axios";
import API, { API_Key, searchLocation } from "./apis/api";
import WeatherStatus from "./components/Status";
import TemperatureCard from "./components/Card";
import { WideCard } from "./components/Card";

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [tomorrow, setTomorrow] = useState({});

  useEffect(() => {
    if (data !== {} || data !== undefined) {
      if (data.coord !== undefined) {
        const { lat, lon } = data.coord;
        axios
          .get(
            `${API}/forecast?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`
          )
          .then((res) => {
            setTomorrow(res.data);
          });
      }
    }
  }, [data]);

  return (
    <div className="h-screen overflow-auto bg-gray-100">
      <div className="px-5 py-2 bg-white flex gap-4">
        <input
          className="w-full md:w-11/12 border-2 border-gray-200 rounded-lg px-4 py-2"
          type="text"
          placeholder="Search Location"
          onKeyPress={searchLocation(city, setData)}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="hidden md:block md:w-1/12 bg-sky-700 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-lg"
          onClick={searchLocation(city, setData)}
        >
          Search
        </button>
      </div>

      {data.main && TemperatureCard(data)}

      {data.main && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mx-2 my-3 text-center">
          <WeatherStatus label="Humidity" value={`${data.main.humidity}%`} />
          <WeatherStatus
            label="Temperature"
            value={
              data.main.temp_max.toFixed() === data.main.temp_min.toFixed()
                ? `${data.main.temp_max.toFixed()}°C`
                : `${data.main.temp_max.toFixed()}°C - ${data.main.temp_min.toFixed()}°C`
            }
          />
          <WeatherStatus label="Pressure" value={`${data.main.pressure} hPa`} />
          <WeatherStatus label="Wind Speed" value={`${data.wind.speed} m/s`} />
          <WeatherStatus label="Cloudiness" value={`${data.clouds.all}%`} />
        </div>
      )}

      {tomorrow.list && (
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 bg-gray-200 rounded-lg h-16 text-center sticky top-0 shadow-md px-4">
            <p className="my-auto">Date</p>
            <p className="my-auto">Hour</p>
            <p className="my-auto">Weather</p>
            <p className="my-auto hidden md:block">Humidity</p>
            <p className="my-auto hidden md:block">Temperature</p>
            <p className="my-auto hidden md:block">Wind</p>
          </div>

          {tomorrow.list.map((day) => WideCard(day))}
        </div>
      )}
    </div>
  );
}

export default App;
