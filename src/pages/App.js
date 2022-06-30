import { useState, useEffect } from "react";
import { currentLocation, forecastNextDay, searchLocation } from "../apis/api";
import getCoordinate from "../functions/coordinate";
import TemperatureCard, { WideCard, WeatherStatus } from "../components/Card";
import Header from "../components/Header";

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [tomorrow, setTomorrow] = useState({});
  const [myLocation, setMyLocation] = useState({});

  // get current location (latitude and longitude)
  useEffect(() => {
    getCoordinate(setMyLocation);
  }, []);

  useEffect(() => {
    if (Object.keys(data).length === 0) {
      if (myLocation.latitude && myLocation.longitude !== undefined) {
        currentLocation(myLocation, setData);
      }
    }
  }, [data, myLocation]);

  useEffect(() => {
    if (data !== {} || data !== undefined) {
      if (data.coord !== undefined) {
        forecastNextDay(data, setTomorrow);
      }
    }
  }, [data]);

  return (
    <main className="background h-screen overflow-auto bg-gray-100">
      <div className="px-3 md:px-5 py-2 bg-white flex flex-col md:flex-row gap-2 md:gap-4">
        <input
          className="w-full md:w-11/12 border-2 border-gray-200 rounded-lg px-4 py-2"
          type="text"
          placeholder="Search Location"
          onKeyPress={searchLocation(city, setData)}
          onChange={(e) => setCity(e.target.value)}
          autoFocus
        />
        <button
          className="w-full md:w-1/12 bg-sky-700 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-lg"
          onClick={searchLocation(city, setData)}
        >
          Search
        </button>
      </div>

      {data.main && TemperatureCard(data)}
      {data.main && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 m-3 text-center">
          <WeatherStatus label="Humidity" value={`${data.main.humidity}%`} />
          <WeatherStatus
            label="Temperature"
            value={
              data.main.temp_max.toFixed() === data.main.temp_min.toFixed()
                ? `${data.main.temp_max.toFixed()}°C`
                : `${data.main.temp_min.toFixed()}°C - ${data.main.temp_max.toFixed()}°C`
            }
          />
          <WeatherStatus label="Pressure" value={`${data.main.pressure} hPa`} />
          <WeatherStatus label="Wind Speed" value={`${data.wind.speed} m/s`} />
          <WeatherStatus label="Cloudiness" value={`${data.clouds.all}%`} />
        </div>
      )}

      {tomorrow.list && (
        <>
          <hr className="border-b-2 border-gray-200 my-10" />
          <div className="flex flex-col gap-3 my-5">
            <h3 className="text-center text-2xl font-bold w-fit mx-auto px-5 text-white shadow-xl rounded-xl mb-5">
              Forecast
            </h3>
            <Header />
            {tomorrow.list.map((day) => WideCard(day))}
          </div>
        </>
      )}
    </main>
  );
}

export default App;
