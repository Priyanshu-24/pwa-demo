const CameraWithInput = () => {
  return (
    <div>
      <div>
        <strong>Camera</strong>
      </div>
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        capture="environment"
      />
    </div>
  );
};

export default CameraWithInput;
