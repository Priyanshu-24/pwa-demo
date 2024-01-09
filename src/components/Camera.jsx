const Camera = () => {
  let mediaRecorder;
  let recordedChunks = [];

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

        // Download the video or perform further operations with the recorded video
        const a = document.createElement("a");
        a.href = url;
        a.download = "recorded-video.webm";
        document.body.appendChild(a);
        a.click();
        recordedChunks = [];
      };

      mediaRecorder.start();
    } catch (error) {
      console.error("Error accessing the camera: ", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
    }
  };

  return (
    <div>
      <div>
        <strong>Camera</strong>
      </div>
      <button onClick={startRecording}>Open Camera</button>
      <button onClick={stopRecording}>Open Camera</button>
    </div>
  );
};

export default Camera;
