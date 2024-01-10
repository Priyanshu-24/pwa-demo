import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4 font-semibold">Implement Details Page</h1>
    </div>
  );
};

export default DetailsPage;
