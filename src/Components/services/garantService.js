import axios from "axios"
import http from "./interceptor/AxiosInterceptor.js"

export default class garantService {
    getAl() {
        return http.get("/GARANT/GETALLGarant", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }

        });

    }
    getidgarant(id) {
        return http.get("/GARANT/GETGarantBYID/" + id);

    }
    removedemande(id) {
        return http.delete("/GARANT/DELETEDEMANDE/" + id);
    }


    create(data) {
        console.log("demande added")
        return http.post("/GARANT/ADDGarant", data);


    }
    put(data) {
        return http.get("/GARANT/UPDATEGarant/", data);

    }

}

