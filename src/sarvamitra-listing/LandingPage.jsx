import { useEffect, useState } from "react";

import SMListing from "./SMListing";
import { calculateDistance } from "../utils/helper";
import { sarvamitraData } from "../dummyData";

const LandingPage = () => {
  const [filteredSM, setFilteredSM] = useState([]);

  useEffect(() => {
    checkGeolocation();
  }, []);

  const checkGeolocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //   const lat = position.coords.latitude;
          //   const log = position.coords.longitude;

          const lat = 18.5579709;
          const log = 73.7830746;

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

  return <SMListing reqSM={filteredSM} />;
};

export default LandingPage;
