import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://job-sample-backend.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
