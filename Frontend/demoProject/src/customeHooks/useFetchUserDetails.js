import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../reducers/authenticationSlice.js";
import authenticationService from "../services/user.service.js";

const useFetchUserDetails = () => {
  const dispatch = useDispatch();

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const user = useSelector((state) => state.auth.user);

  const fetchUserDetails = async () => {
    try {
      const response = await authenticationService.fetchUserDetails();

      // Dispatch user data to the store
      dispatch(setUser(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    if (isAuthenticated && !user) {
      
      fetchUserDetails();
    }
  }, [isAuthenticated, user, dispatch]);

  return { user };
};

export default useFetchUserDetails;
