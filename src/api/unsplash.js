import axios from "axios";
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID uqpbbQBQXWUVeTbKcVV37X0w9BeoQbpoOxfx-r-FZ_Q'
    }
});