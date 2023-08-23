import axios from 'axios';
import { legacy_createStore } from 'redux';
const LOGIN_USER_KEY = 'WD_FORUM_LOGIN_USER_KEY';

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
    baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
    baseURL = 'https://cinemaparadisemain.capweather.repl.co/';
}

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
    config => {
        if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
            config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
        }

        return config;
    },
    err => {
        console.error(err);
    }
);

export default class API {
    getPosts = async (params) => {
        try {
            const response = await api.get('/posts/', { params });
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };
    addPost = async postBody => {
        const formData = new FormData();

        for (const key in postBody) {
            formData.append(key, postBody[key]);
        }

        try {
            const response = await api.post('/posts/add/', formData);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    };
    deletePost = async id => {
        try {
            return await api.delete(`/posts/delete/${id}/`);
        } catch (error) {
            throw new Error(error);
        }
    };

    getMovies = async params =>{
        let url="/movies/"
        let query = new URLSearchParams ();
        for(const key in params) {
            if(params[key] != null){
                query.append(key,params[key]);
            }
        }
        if(query.toString()!== ''){
            url += '?' + query.toString();
        }
        const places = await api
        .get(url)
        .then(response => {
            console.log(response.data)
            return response.data;
        })
        .catch(error => {
            throw new Error(error);
        });
        return places; 
    };

    getMovie = async id => {
        const movies = await api
        .get("/movies/" + id + '/')
        .then(response =>{
            return response.data;

        })
        .catch(error => {
            throw new Error(error);
        })
        return movies;
    }
}
