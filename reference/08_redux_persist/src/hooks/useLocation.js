import { useState, useEffect } from "react";

const Geolocation = navigator.geolocation;

export default function useLocation() {
  const [location, setLocation] = useState();

  useEffect(() => {
    Geolocation.getCurrentPosition((location) => {
      setLocation(location);
    });
  }, []);

  return location;
}
