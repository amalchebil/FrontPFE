import axios from "axios"
import http from "./interceptor/AxiosInterceptor.js"

export default class DemandeSubSerivce{
    getAl() {
        return http.get("/DEMANDESUBVENTION/GETALLDEMANDE");
    }
    getid(id) {
        return http.get("/DEMANDESUBVENTION/GETDEMANDEBYID/"+ id);

    }
    removedemande(id) {
        return http.delete("/DEMANDESUBVENTION/DELETEDEMANDE/" + id);
    }


    create(data) {
        console.log("demande added")
        return http.post("/DEMANDESUBVENTION/ADDDEMANDE", data);


    }
    put(id,data) {
        return http.put("/DEMANDESUBVENTION/put/"+id,data);

    }
}