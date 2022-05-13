import http from "~/http/";
export function getdemo() {
    return http.get('/example')
}