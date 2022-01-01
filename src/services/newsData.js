import axios from "axios";

const apiKey = process.env.REACT_APP_NEWS_API_KEY;

const getArticle = () => {
    const request = axios.get(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${apiKey}`)
    return request.then(response => response.data);
}

export default {getArticle}