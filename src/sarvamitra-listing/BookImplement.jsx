import { createCredential, verifyCredential } from "../utils/helper";
import { useNavigate, useParams } from "react-router-dom";

import { useState } from "react";

const BookImpelment = () => {
  const { sm, equipment } = useParams();
  const navigate = useNavigate();
  const [render, setRender] = useState(false);
  const verifyCredentials = async () => {
    if (localStorage.getItem("publicKey")) {
      let res = await verifyCredential();
      if (res) {
        navigate(`/implement/${sm}/${equipment}/booked`);
      }
    } else {
      let res = await createCredential();
      if (res) setRender(true);
    }
  };

  console.log(render);

  return (
    <div className="p-5 flex flex-col gap-7">
      <h1 className="text-2xl mb-4 font-semibold">
        Book {equipment} from {sm} Branch
      </h1>

      <div class="sm:col-span-3">
        <label
          for="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Start Time
        </label>
        <div class="mt-2">
          <input
            type="datetime-local"
            placeholder="Enter your name"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div class="sm:col-span-3">
        <label
          for="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          End Time
        </label>
        <div class="mt-2">
          <input
            type="datetime-local"
            placeholder="Enter your name"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div class="sm:col-span-3">
        <label
          for="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <div class="mt-2">
          <input
            type="text"
            placeholder="Enter your name"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div class="sm:col-span-3">
        <label
          for="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email
        </label>
        <div class="mt-2">
          <input
            type="email"
            placeholder="Enter your name"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div class="sm:col-span-3">
        <label
          for="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Aadhaar Card Front
        </label>
        <div class="mt-2">
          <input
            accept="image/*"
            type="file"
            capture="environment"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div class="sm:col-span-3">
        <label
          for="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Aadhaar Card Back
        </label>
        <div class="mt-2">
          <input
            accept="image/*"
            type="file"
            capture="environment"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <button
          onClick={verifyCredentials}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {localStorage.getItem("publicKey")
            ? `Verify Youself to Book`
            : `Register Yourself to Book`}
        </button>
      </div>
    </div>
  );
};

export default BookImpelment;
