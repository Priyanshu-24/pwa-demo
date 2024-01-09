const NotificationPage = () => {
  const requestNotificationPermission = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          showNotification();
        }
      });
    } else {
      console.log("Notifications not supported in this browser");
    }
  };

  const showNotification = () => {
    new Notification("Got Notification from PWA");
  };

  return (
    <div>
      <div>
        <strong>Notification</strong>
      </div>
      <button onClick={requestNotificationPermission}>
        Enable Notifications
      </button>
    </div>
  );
};

export default NotificationPage;
