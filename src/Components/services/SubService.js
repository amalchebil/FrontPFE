import axios from "axios"
import http from "./interceptor/AxiosInterceptor.js"

export default class SubSerivce{
    getAl() {
        return http.get("/SUBVENTION/GETALLSubventionS");
    }
    getid(id) {
        return http.get("/SUBVENTION/Subvention/" + id);

    }
    removedemande(id) {
        return http.delete("/SUBVENTION/DELETESubvention/" + id);
    }


    create(data) {
        console.log("demande added")
        return http.post("/SUBVENTION/POSTSubvention", data);


    }
    put(id,data) {
        return http.put("/SUBVENTION/put/"+id,data);

    }
}