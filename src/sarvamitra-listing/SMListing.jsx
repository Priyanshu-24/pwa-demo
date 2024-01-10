import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SMListing = ({ reqSM }) => {
  const [selectedImplement, setSelectedImplement] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectedImplement(e.target.value);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4 font-semibold">
        {selectedImplement
          ? `All Nearby Sarvamitra with ${selectedImplement}`
          : "Please Select an Implement"}
      </h1>
      <div className="flex flex-col justify-center items-center">
        <select
          name="implement"
          id="implement"
          className="w-full border border-black"
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
                  navigate(`/implements/${sarvamitra.id}`);
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
