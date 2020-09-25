import Axios from "axios";

const api = 'http://localhost:5000/api/';

export const ApiService = {
    get(path: string) {
        return Axios.get(api + path);
    },
    post(path: string, data:any) {
        return Axios.post(api + path, data);
    },
}