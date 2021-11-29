import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/layout/Header";
import Content from "../components/layout/Content";

import { getCurrentWeather } from "../features/weather/weatherSlice";

export default function WeatherScreen() {
  const { loading, weather } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentWeather);
  }, []);

  return (
    <>
      <Header title="Previsão do Tempo" />
      <Content>
        {loading && <div class="text-center">...</div>}
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
