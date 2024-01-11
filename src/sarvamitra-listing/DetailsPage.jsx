import { useNavigate, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4 font-semibold">Implement Details Page</h1>
      <div>Details Info will come here</div>
      <div
        className="border border-blue-500 shadow-lg p-2 rounded flex justify-center hover:font-semibold"
        onClick={() => navigate(`/implement/${id}/book`)}
      >
        Book Implement
      </div>
    </div>
  );
};

export default DetailsPage;
