import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { Id } = useParams();
  return <div>DetailsPage</div>;
};

export default DetailsPage;
