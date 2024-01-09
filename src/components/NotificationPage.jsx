const NotificationPage = () => {
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
    <div>
      <div>
        <strong>Notification</strong>
      </div>
      <button onClick={sendNotification}>Enable Notifications</button>
    </div>
  );
};

export default NotificationPage;
