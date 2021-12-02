import { createSlice } from "@reduxjs/toolkit";

const Geolocation = navigator.geolocation;
const ApiKey = "7a47acf45077d3a6154dfe4a94728385";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    loading: true,
    location: undefined,
    weather: undefined,
  },
  reducers: {
    setLocation: (state, action) => {
      const location = action.payload;
      state.location = {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      };
    },

    setWeather: (state, action) => {
      state.weather = action.payload.weather[0];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

const { setLoading, setLocation, setWeather } = weatherSlice.actions;

export async function getCurrentWeather(dispatch, getState) {
  dispatch(setLoading(true));

  const location = await getCurrentLocation();
  dispatch(setLocation(location));

  const weather = await getWeather(location);
  dispatch(setWeather(weather));

  dispatch(setLoading(false));
}

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition((location) => {
      resolve(location);
    });
  });
}

function getWeather(location) {
  return new Promise((resolve, reject) => {
    const { latitude, longitude } = location.coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`;
    fetch(url)
      .then((r) => r.json())
      .then((weather) => resolve(weather));
  });
}

export default weatherSlice.reducer;
