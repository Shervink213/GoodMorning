import axios from "axios";

const getArticle = () => {
    const request = axios.get(` https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`)
    return request.then(response => response.data.slice(0,10))

}

const getStory = ({story}) => {

    const request = axios.get("https://hacker-news.firebaseio.com/v0/item/" + story + ".json")
    return request.then(response => response.data);

}

export default {getArticle, getStory}