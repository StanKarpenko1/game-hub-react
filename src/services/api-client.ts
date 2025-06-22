import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5a66aded65ab434e9f21130f9b5c1e04'
    }
});