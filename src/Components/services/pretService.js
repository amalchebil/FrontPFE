import axios from "axios"
import http from "./interceptor/AxiosInterceptor.js"

export default class pretService {

    create(data) {
        console.log("demande pret added")
        return http.post("/PRET/POSTPret", data);


    }
    getid(id) {
        return http.get("/PRET/Pret/" + id);

    }
    getAl() {
        return http.get("/PRET/GETALLPretS");
    }
    removepret(id) {
        return http.delete("/PRET/DELETEPret/" + id);
    }

}