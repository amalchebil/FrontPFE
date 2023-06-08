import axios from "axios"
import http from "./interceptor/AxiosInterceptor.js"

export default class userService {
    getAll() {
        return http.get("/Client/GETALLClient");
    }

    create(data) {
        console.log("client added")
        return http.post("/Client/ADDClient", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }

        });

    }


    remove(id) {
        return http.delete("/Client/DELETEClient/" + id);
    }

    getid(id) {
        return http.get("/Client/GETCLIENTBYID/" + id);
    }
    put(data) {
        return http.get("/Client/updateClient/", data);

    }

    /***************Personnel */
    createpersonnel(data) {
        console.log("personnel added")
        return http.post("/USER/register", data);


    }
    getAl() {
        return http.get("/USER/GETALLUSERS");
    }
    removepersonnel(id) {
        return http.delete("/USER/DELETEUSER/" + id);
    }
    getiduser(id) {
        return http.get("/USER/GETUSERBYID/" + id);

    }

}


