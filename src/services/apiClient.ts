import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'749a832b94924ccf9b9bd189d240fb2d'
    }
})