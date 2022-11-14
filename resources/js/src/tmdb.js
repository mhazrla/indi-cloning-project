import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Accept: "application/json",
    },
    params: {
        api_key: "3d67255a70d3ee3aba3a260b9addd183",
    },
});
