import { useEffect } from "react";

const Booked = () => {
  const registration = navigator.serviceWorker.getRegistration();
  const sendNotification = async () => {
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
    if ("showNotification" in registration) {
      registration.showNotification("Hello");
    } else {
      new Notification("Hello");
    }
  };

  useEffect(() => {
    // Check if the Notification API is supported
    if ("Notification" in window) {
      // Request notification permission
      Notification.requestPermission()
        .then((permission) => {
          if (permission === "granted") {
            // Create a static notification
            const notification = new Notification("Hello", {
              body: "This is a static notification from your app.",
            });

            // Handle notification click
            notification.onclick = () => {
              console.log("Notification clicked");
              // Add your custom handling logic here
            };
          } else {
            console.warn("Notification permission denied");
          }
        })
        .catch((error) => {
          console.error("Error requesting notification permission:", error);
        });
    } else {
      console.warn("Notification API not supported");
    }
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4 font-semibold" onClick={sendNotification}>
        Implement Booked Successfully
      </h1>
    </div>
  );
};

export default Booked;
