import React, { useEffect, useState } from "react";

const Booked = () => {
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
        Implement Booked Successfully
      </h1>
    </div>
  );
};

export default Booked;
