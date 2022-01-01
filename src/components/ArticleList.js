import React, {useState, useEffect } from "react";
import {List} from 'semantic-ui-react';
import newsService from '../services/newsData';
import axios from "axios";

const ArticleList = () => {
    const [stories, setStories ] = useState([]);
    
    useEffect(() => {
        async function getTopStories() {
            const url = "https://hacker-news.firebaseio.com/v0/newstories.json";
            try {
              const response = await fetch(url);
              if (response.ok === false) {
                throw new Error("Response Error:" + response.text);
              }
              const json = await response.json();
              const promises = json
                .slice(0, 10)
                .map(id =>
                  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
                    response => response.json()
                  )
                );
              const result = await Promise.all(promises);
              setStories(result);
            } catch (err) {
              console.error(err);
            }
          }
          getTopStories();
    },[])

    

    return (
        <List divided style = {{ maxWidth: 900, margin: '0 auto'}}>
            {stories.map((story) => {
                <List.Item key = {story.title}>
                    {story.title}
                </List.Item>
            })}
        </List>
    )
    
    
}

export default ArticleList