import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import ApiRoutes from "../utils/ApiRoutes";
import { useNavigate } from "react-router";
import { addUser } from "../slices/userSlice";
import { Link } from "react-router";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + ApiRoutes.logout,
        {},
        { withCredentials: true }
      );

      navigate("/login");
    } catch (error) {
      console.error("Logout ERROR :", error);
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>{" "}
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            TechMirus Innovations
          </Link>
        </div>
        <div className="flex-1">
          <Link to="/profile" className="btn btn-ghost text-xl">
            Profile
          </Link>
        </div>
        <div className="flex-1">
          <a onClick={handleLogout} className="btn btn-ghost text-xl">
            Logout
          </a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            {user && <h1>Welcome {user.firstName}</h1>}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
