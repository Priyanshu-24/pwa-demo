import Biometric from "../components/Biometric";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4 font-semibold">Implement Details Page</h1>
      <Biometric />
    </div>
  );
};

export default DetailsPage;
