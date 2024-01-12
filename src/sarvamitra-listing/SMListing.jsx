import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SMListing = ({ reqSM, latitude, longitude }) => {
  const [selectedImplement, setSelectedImplement] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectedImplement(e.target.value);
  };

  return (
    <div className="p-5">
      <div className="text-sm flex justify-between mb-4">
        <div>Latitude: {latitude}</div>
        <div>Longitude: {longitude}</div>
      </div>

      <h1 className="text-2xl mb-4 font-semibold">
        {selectedImplement
          ? `All Nearby Sarvamitra with ${selectedImplement}`
          : "Please Select an Implement"}
      </h1>
      <div className="flex flex-col justify-center items-center">
        <select
          name="implement"
          id="implement"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          onChange={handleChange}
        >
          <option value="">--Select--</option>
          <option value="Tractor">Tractor</option>
          <option value="Thresher">Thresher</option>
          <option value="Drone">Drone</option>
          <option value="Rotavator">Rotavator</option>
        </select>
        {selectedImplement &&
          reqSM.map((sarvamitra) => {
            return (
              <div
                key={sarvamitra.id}
                className="border border-black p-2 rounded w-full m-5 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(
                    `/implement/${sarvamitra.name}/${selectedImplement}`
                  );
                }}
              >
                <div className="text-lg font-semibold">{sarvamitra.name}</div>
                <div className="font-semibold">
                  Distance: {sarvamitra.distanceToBranch} KM
                </div>
                <div className="font-semibold">
                  Rate of {selectedImplement}:{" "}
                  {sarvamitra.equipments[selectedImplement]} / hr
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SMListing;
