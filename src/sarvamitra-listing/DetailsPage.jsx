import { useNavigate, useParams } from "react-router-dom";

import { equipmentInfo } from "../dummyData";

const DetailsPage = () => {
  const { sm, equipment } = useParams();

  const navigate = useNavigate();
  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4 font-semibold">
        {equipment} Details for {sm} Branch
      </h1>
      <div className="flex flex-col gap-5">
        <div>
          Used For : <br />
          <strong>{equipmentInfo[equipment].usedFor}</strong>
        </div>
        <div>
          Purchased by SG on: <br />
          <strong>{equipmentInfo[equipment].purchasedOn}</strong>
        </div>
        <div>
          Previously Rented By : <br />
          <strong>{equipmentInfo[equipment].usedByCustomers} customers</strong>
        </div>
        <div>
          Avg Customer Rating : <br />
          <strong>{equipmentInfo[equipment].customerRatings}/5</strong>
        </div>
      </div>
      <div
        className="mt-10 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => navigate(`/implement/${sm}/${equipment}/book`)}
      >
        Book Implement
      </div>
    </div>
  );
};

export default DetailsPage;
