import axios from "axios"
import http from "./interceptor/AxiosInterceptor.js"

export default class ProjetService {
    getAl() {
        return http.get("/PROJET/GETALLPROJETS");
    }
    getid(id) {
        return http.get("/PROJET/projet/" + id);

    }
    removedemande(id) {
        return http.delete("/PROJET/DELETEPROJET/" + id);
    }


    create(data) {
        console.log("projet added")
        return http.post("PROJET/POSTPROJET", data);


    }
    put(id, data) {
        return http.put("/PROJET/put/" + id, data);

    }



    /**********************candidature */
    createcandidature(data) {
        console.log("demande added")
        return http.post("DEMANDEPROJET/ADDDEMANDE", data);


    }
    getAll() {
        return http.get("/DEMANDEPROJET/GETALLDEMANDE");
    }

    remove(id) {
        return http.delete("/DEMANDEPROJET/DELETEDEMANDE/" + id);
    }
    getidc(id) {
        return http.get("/DEMANDEPROJET/GETDEMANDEBYID/" + id);

    }
    // put(data) {
    //     return http.get("/Client/UPDATEClient/", data);

    // }
}
