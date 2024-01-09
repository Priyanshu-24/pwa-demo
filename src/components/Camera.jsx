const Camera = () => {
  const accessCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const videoElement = document.createElement("video");
      videoElement.srcObject = stream;
      document.body.appendChild(videoElement);
      videoElement.play();
    } catch (error) {
      console.error("Error accessing the camera: ", error);
    }
  };

  return (
    <div>
      <div>
        <strong>Camera</strong>
      </div>
      <button onClick={accessCamera}>Open Camera</button>
    </div>
  );
};

export default Camera;
