import axios from "axios";

const API = "https://api.openweathermap.org/data/2.5";
export const API_Key = process.env.REACT_APP_API_KEY;

export function searchLocation(city, setData) {
  return (e) => {
    if (e.key === "Enter" || e.type === "click") {
      axios
        .get(`${API}/weather?q=${city}&appid=${API_Key}&units=metric`)
        .then((res) => {
          setData(res.data);
          // console.log(res.data);
        });
    }
  };
}

export default API;
