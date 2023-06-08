import axios from "axios"
import http from "./interceptor/AxiosInterceptor.js"

export default class Events {
    getAllClient() {
        return http.get("/EVENTClient/GETALLEvent");
    }
    getAllCaisse() {
        return http.get("/EVENTCaisse/GETALLEvent");
    }
}