import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../slices/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import ApiRoutes from "../utils/ApiRoutes";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + ApiRoutes.employeeProfile, {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
      console.error("Fetch user error ::", error);
    }
  };
  return (
    <>
      <h1>{user?.firstName}</h1>
    </>
  );
};
export default ProfilePage;
