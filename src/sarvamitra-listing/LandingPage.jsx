import { useEffect, useState } from "react";

import SMListing from "./SMListing";
import { calculateDistance } from "../utils/helper";
import { sarvamitraData } from "../dummyData";

const LandingPage = () => {
  const [filteredSM, setFilteredSM] = useState([]);
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    checkGeolocation();
  }, []);

  const checkGeolocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
          // const lat = position.coords.latitude;
          // const log = position.coords.longitude;

          const lat = 18.5579709;
          const log = 73.7830746;
          setLatitude(lat);
          setLongitude(log);

          // getting servavle sarvamitra with sorting
          const sortedSM = sarvamitraData
            .sort(
              (a, b) =>
                calculateDistance(lat, log, a.latitude, a.longitude, "K") -
                calculateDistance(lat, log, b.latitude, b.longitude, "K")
            )
            .filter(
              (item) =>
                calculateDistance(
                  lat,
                  log,
                  item.latitude,
                  item.longitude,
                  "K"
                ) < item.radiusServing
            )
            .map((item) => {
              let distance = calculateDistance(
                lat,
                log,
                item.latitude,
                item.longitude,
                "K"
              );
              return { ...item, distanceToBranch: Math.ceil(distance) };
            });

          setFilteredSM(sortedSM);
        },
        (error) => {
          console.log(`error in getCurrentPosition": ${error}`);
        }
      );
    } else {
      console.log("geolocation not present in navigator");
    }
  };

  if (loading) {
    return (
      <div className="w-full h-full text-2xl font-semibold p-5">
        Fetching Your Location ...
      </div>
    );
  }

  return (
    <SMListing reqSM={filteredSM} latitude={latitude} longitude={longitude} />
  );
};

export default LandingPage;
