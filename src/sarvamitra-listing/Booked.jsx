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

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4 font-semibold" onClick={sendNotification}>
        Implement Booked Successfully
      </h1>
    </div>
  );
};

export default Booked;
