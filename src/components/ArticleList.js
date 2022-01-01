import React, {useState, useEffect } from "react";
import {List} from 'semantic-ui-react';
import newsService from '../services/newsData';

const ArticleList = ({ Ids }) => {
    const [stories, setStories ] = useState([]);
    
    useEffect(() => {
        Ids.forEach((element) => {
            newsService
                .getStory(element)
                .then(response => {
                    setStories([...stories, response])
                })
        });
    },[])

    
    return (
        <List divided style = {{ maxWidth: 900, margin: '0 auto'}}>
            {stories.map((story, index) => {
                <List.Item key = {story.title + index}>
                    {story.title}
                </List.Item>
            })}
        </List>
    )
    
}

export default ArticleList