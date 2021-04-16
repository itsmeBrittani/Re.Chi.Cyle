import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/action/events",
  headers: {
    "Content-type": "application/json"
  }
});