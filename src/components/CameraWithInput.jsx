const CameraWithInput = () => {
  return (
    <div>
      <div>
        <strong>Start Camera</strong>
      </div>
      <div style={{ margin: "10px 0" }}>
        <label>Photo</label>
        <input accept="image/*" type="file" capture="environment" />
      </div>
      <div>
        <label>Video</label>
        <input accept="video/*" type="file" capture="environment" />
      </div>
    </div>
  );
};

export default CameraWithInput;
