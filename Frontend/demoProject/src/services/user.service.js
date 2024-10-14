import axios from "axios";
import config from "../config/config";

const axiosInstance = axios.create({
  withCredentials: true,
});

class AuthenticationService {
  registerUser(data) {
    return axiosInstance.post(`${config.serverUrl}/user/register`, data);
  }
}

const authenticationService = new AuthenticationService();
export default authenticationService;