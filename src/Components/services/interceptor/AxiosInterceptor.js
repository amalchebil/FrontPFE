import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:8080"
    ,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,

        "Content-type": "application/json",
        // "Content-type": "'application/x-www-form-urlencoded",
        //"Content-Type": "multipart/form-data",
        //withCredentials: true

    },
});