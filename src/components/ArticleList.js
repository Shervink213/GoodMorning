import React, {useState, useEffect } from "react";
import { List, Dimmer, Loader  } from 'semantic-ui-react';
import ArticleItem from './ArticleItem';
import 'fomantic-ui-css/semantic.css';





const ArticleList = () => {
  const [stories, setStories ] = useState([]);
  
  useEffect(() => {
    async function getTopStories() {
      const url = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&language=en`;
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error("Response Error:" + response.text);
        }
        const json = await response.json();
        const promises = json.results;
        const result = await Promise.all(promises);
        setStories(result);
      } catch (err) {
        console.error(err.text);
      }
    }
    getTopStories();
  },[])

  return (
    <div>
      {(typeof stories != 'undefined') ? (
      <List divided style={{ maxWidth: 900, margin: "0 auto" }}>
        {stories.map((article, index) => (
          <List.Item>
            <ArticleItem article={article} key={index} />
          </List.Item>
        ))}
      </List>
      ): (
        <div className="Loading">
          <Dimmer>
            <Loader>Loading...</Loader>
          </Dimmer>
        </div>
      )}
    </div>
    
  )
    
    
}

export default ArticleList