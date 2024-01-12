import Logo from "../assets/sg-logo.png";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-20 p-2 shadow-xl flex items-center">
        <img
          src={Logo}
          className="w-32"
          onClick={() => navigate("/")}
          alt="sarvagram"
        />
      </div>
      {children}
    </>
  );
};

export default Layout;
