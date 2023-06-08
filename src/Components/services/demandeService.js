import axios from "axios"
import http from "./interceptor/AxiosInterceptor.js"

export default class demandeService {
    getAl() {
        return http.get("/DEMANDEPRET/GETALLDEMANDE", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }

        });

    }
    getiddemande(id) {
        return http.get("/DEMANDEPRET/GETDEMANDEBYID/" + id);

    }
    removedemande(id) {
        return http.delete("/DEMANDEPRET/DELETEDEMANDE/" + id);
    }


    create(data) {
        console.log("demande added")
        return http.post("/DEMANDEPRET/ADDDEMANDE", data);


    }
    put(data) {
        return http.get("/DEMANDEPRET/UPDATEDEMANDE/", data);

    }
    // modifier(data) {
    //     return http.post("/DEMANDEPRET/49/modifier-statut", data);

    // }
    // put(data) {
    //     return http.get("/Client/UPDATEClient/", data);

    // }
}

