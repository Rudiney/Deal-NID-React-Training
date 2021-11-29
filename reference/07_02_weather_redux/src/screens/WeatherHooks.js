import { useState, useEffect } from "react";

import Header from "../components/layout/Header";
import Content from "../components/layout/Content";

import useWeather from "../hooks/useWeather";

export default function WeatherScreen() {
  const weather = useWeather();

  return (
    <>
      <Header title="Previsão do Tempo" />
      <Content>
        {weather && (
          <div className="w-full flex flex-col items-center">
            <div className="bg-gray-400 rounded-full">
              <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
            </div>
            <div className="font-bold">{weather.main}</div>
            <div>{weather.description}</div>
          </div>
        )}
      </Content>
    </>
  );
}
