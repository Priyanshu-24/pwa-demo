import { createCredential, verifyCredential } from "../utils/helper";
import { useNavigate, useParams } from "react-router-dom";

import { useState } from "react";

const BookImpelment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [render, setRender] = useState(false);
  const verifyCredentials = async () => {
    if (localStorage.getItem("publicKey")) {
      let res = await verifyCredential();
      if (res) {
        navigate(`/implement/${id}/booked`);
      }
    } else {
      let res = await createCredential();
      if (res) setRender(true);
    }
  };

  console.log(render);

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4 font-semibold">Book Tractor</h1>
      <div className="flex flex-col my-8">
        <label className="font-semibold">Start Time</label>
        <input type="datetime-local" className="border border-black" />
      </div>
      <div className="flex flex-col my-8">
        <label className="font-semibold">End Time</label>
        <input type="datetime-local" className="border border-black" />
      </div>
      <div className="flex flex-col my-8">
        <label className="font-semibold">Name</label>
        <input type="text" className="border border-black" />
      </div>
      <div className="flex flex-col my-8">
        <label className="font-semibold">Email</label>
        <input type="email" className="border border-black" />
      </div>
      <div
        className="border border-blue-500 shadow-lg p-2 rounded flex justify-center hover:font-semibold"
        onClick={verifyCredentials}
      >
        {localStorage.getItem("publicKey")
          ? `Verify Youself to Book`
          : `Register Yourself to Book`}
      </div>
    </div>
  );
};

export default BookImpelment;
