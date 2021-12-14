import axios from "axios";
let inital_base_url = 'http://adminpanel';
if (window.location.hostname === "localhost") {
    inital_base_url = 'http://localhost';
}else{
   inital_base_url = window.location.protocol + "//" + window.location.hostname;
   }

export function get(f, url, params = {}) {
    axios.get(inital_base_url + url, params)
        .then((rezult) => { f(rezult.data); })

}