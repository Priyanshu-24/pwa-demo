import { useEffect, useState } from "react";

const Location = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    checkGeolocation();
  }, []);

  const checkGeolocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setLatitude("error in getCurrentPosition");
        }
      );
    } else {
      setLatitude("geolocation not present in navigator");
    }
  };

  return (
    <div>
      <div>
        <strong>Location</strong>
      </div>
      <div>{`Latitude is ${latitude}`}</div>
      <div>{`Longitude is ${longitude}`}</div>
    </div>
  );
};

export default Location;
