import { useState, useEffect } from "react";

import useLocation from "./useLocation";

const ApiKey = "28b424166ff87d0cec979c39d4fd635e";
export default function useWeather() {
  const [weather, setWeather] = useState();
  const location = useLocation();

  useEffect(() => {
    if (!location) return;
    const { latitude, longitude } = location.coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`;

    fetch(url)
      .then((r) => r.json())
      .then((weather) => {
        setWeather(weather);
      });
  }, [location]);

  return weather?.weather[0];
}
