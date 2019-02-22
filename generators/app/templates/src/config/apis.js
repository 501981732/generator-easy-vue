import ax from './axiosConfig.js'

let url = {},
    postUrls = {};

if (process.env.NODE_ENV === "development") {
    url = {
        filter: "",
    };
} else if (process.env.NODE_ENV === "test") {
    url = {
        filter: "",
    };
} else if (process.env.NODE_ENV === "production") {
    url = {
        filter: "",
    };
}

const filter = (data) => ax.get(url.filter,{params:data})

export default {
    filter,
}
