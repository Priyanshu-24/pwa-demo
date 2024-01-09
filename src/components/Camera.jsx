const Camera = () => {
  let mediaRecorder;
  let recordedChunks = [];
  let videoElement;

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        videoElement.src = url;

        const a = document.createElement("a");
        a.href = url;
        a.download = "recorded-video.webm";
        document.body.appendChild(a);
        a.click();
        recordedChunks = [];
        document.body.removeChild(a);
      };

      videoElement = document.createElement("video");
      videoElement.autoplay = true;
      document.body.appendChild(videoElement);

      videoElement.srcObject = stream;

      mediaRecorder.start();
    } catch (error) {
      console.error("Error accessing the camera: ", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      videoElement.srcObject = null;
      document.body.removeChild(videoElement);
    }
  };

  return (
    <div>
      <div>
        <strong>Camera</strong>
      </div>
      <button onClick={startRecording}>Open Camera</button>
      <button onClick={stopRecording}>Close Camera</button>
    </div>
  );
};

export default Camera;
