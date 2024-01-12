import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Booked = () => {
  const { sm, equipment } = useParams();
  const navigate = useNavigate();
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    const initializeServiceWorker = async () => {
      try {
        const reg = await navigator.serviceWorker.getRegistration();
        console.log("Service Worker registration found:", reg);
        setRegistration(reg);
      } catch (error) {
        console.error("Error getting Service Worker registration:", error);
      }
    };

    initializeServiceWorker();
  }, []);

  const sendNotification = async () => {
    if (!registration) {
      console.error("Service Worker registration not found");
      return;
    }

    if (Notification.permission === "granted") {
      showNotification();
    } else {
      if (Notification.permission !== "denied") {
        const permission = await Notification.requestPermission();

        if (permission === "granted") {
          showNotification();
        }
      }
    }
  };

  const showNotification = () => {
    if (registration && "showNotification" in registration) {
      registration.showNotification("Hello", {
        body: "This is a notification from your app.",
      });
    } else {
      console.error(
        "Service Worker registration or showNotification not supported"
      );
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4 font-semibold" onClick={sendNotification}>
        {equipment} Booked Successfully from {sm} Branch
      </h1>
      <div
        className="mt-10 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => navigate(`/`)}
      >
        Go Home{" "}
      </div>
    </div>
  );
};

export default Booked;
