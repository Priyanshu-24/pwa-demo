const SMListing = ({ reqSM }) => {
  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4 font-semibold">All Nearby Sarvamitra</h1>
      <div className="flex flex-col justify-center items-center">
        {reqSM.map((sarvamitra) => {
          return (
            <div
              key={sarvamitra.id}
              className="border border-black p-2 rounded w-full m-5 cursor-pointer"
            >
              <div className="text-lg font-semibold">{sarvamitra.name}</div>
              <div className="font-semibold">
                Distance: {sarvamitra.distanceToBranch} KM
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SMListing;
