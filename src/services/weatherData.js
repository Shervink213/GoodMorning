import axios from "axios";
import React from "react";



const getWeather = () => {
    const request = axios.get(`${process.env.REACT_APP_API_URL}?lat=${process.env.REACT_APP_LAT}&lon=${process.env.REACT_APP_LONG}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    return request.then(response => response.data);
}

const getLat = () => {
    navigator.geolocation.getCurrentPosition(position => {
        return position.coords.latitude;
    })
}

const getLong = () => {
    navigator.geolocation.getCurrentPosition(position => {
        return position.coords.longitude;
    })
}

export default { getWeather, getLat, getLong}