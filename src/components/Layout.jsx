import { createCredential, verifyCredential } from "../utils/helper";

import Logo from "../assets/sg-logo.png";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const verifyAndRedirect = async () => {
    if (localStorage.getItem("publicKey")) {
      let res = await verifyCredential();
      if (res) {
        navigate("/my-bookings");
      }
    } else {
      let res = await createCredential();
      if (res) {
        navigate("/my-bookings");
      }
    }
  };

  return (
    <>
      <div className="h-20 p-2 shadow-xl flex items-center justify-between">
        <img
          src={Logo}
          className="w-32"
          onClick={() => navigate("/")}
          alt="sarvagram"
        />
        {window?.location?.pathname !== "/my-bookings" && (
          <div
            className="font-semibold shadow-lg p-2 rounded"
            onClick={verifyAndRedirect}
          >
            My Bookings
          </div>
        )}
      </div>
      {children}
    </>
  );
};

export default Layout;
