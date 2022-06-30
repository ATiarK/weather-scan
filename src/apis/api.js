import axios from "axios";

const API = "https://api.openweathermap.org/data/2.5";
const API_Key = process.env.REACT_APP_API_KEY;

// fetch data by input city
export function searchLocation(city, setData) {
  return (e) => {
    if (e.key === "Enter" || e.type === "click") {
      axios
        .get(`${API}/weather?q=${city}&appid=${API_Key}&units=metric`)
        .then((res) => {
          setData(res.data);
        });
    }
  };
}

// fetch next day forecast data
export function forecastNextDay(data, setTomorrow) {
  const { lat, lon } = data.coord;
  axios
    .get(`${API}/forecast?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`)
    .then((res) => {
      setTomorrow(res.data);
    });
}

// fetch current location data
export function currentLocation(myLocation, setData) {
  const { latitude, longitude } = myLocation;
  axios
    .get(
      `${API}/weather?lat=${latitude}&lon=${longitude}&appid=${API_Key}&units=metric`
    )
    .then((res) => {
      setData(res.data);
    });
}

export default API;
