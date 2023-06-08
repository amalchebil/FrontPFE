import axios from "axios"
import http from "./interceptor/AxiosInterceptor.js"

export default class agenceService {
    getAll() {
        return http.get("/AGENCE/GETALLAgence");

    }
}