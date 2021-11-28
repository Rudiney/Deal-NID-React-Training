import { useState, useEffect } from "react";

import Header from "../components/layout/Header";
import Content from "../components/layout/Content";

const Geolocation = navigator.geolocation;

const ApiKey = "28b424166ff87d0cec979c39d4fd635e";

export default function WeatherScreen() {
  const [location, setLocation] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    Geolocation.getCurrentPosition((location) => {
      setLocation(location);
    });
  }, []);

  useEffect(() => {
    if (!location) return;
    const { latitude, longitude } = location.coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`;

    console.log("url", url);

    fetch(url)
      .then((r) => r.json())
      .then((weather) => {
        setWeather(weather);
        console.log("weather", weather);
      });
  }, [location]);

  const currentWeather = weather?.weather?.[0];

  return (
    <>
      <Header title="Previsão do Tempo" />
      <Content>
        {!Geolocation && (
          <div className="bg-red-300 text-white rounded-lg p-4 text-center">
            Seu navegador não suporta Localização
          </div>
        )}
        {currentWeather && (
          <div className="w-full flex flex-col items-center">
            <div className="bg-gray-400 rounded-full">
              <img src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`} alt="" />
            </div>
            <div className='font-bold'>{currentWeather.main}</div>
            <div>{currentWeather.description}</div>
          </div>
        )}
      </Content>
    </>
  );
}
