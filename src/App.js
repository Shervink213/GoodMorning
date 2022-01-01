import React, { useEffect, useState } from "react";
import weatherServices from './services/weatherData';
import newsServices from './services/newsData';
import { Dimmer, Loader, Container, Header } from 'semantic-ui-react';
import Weather from './components/Weather';
import ArticleList from "./components/ArticleList";
import "./App.css";




function App() {
  const [weather, setWeather] = useState([]);
  const [articles, setArticles ] = useState([]);

  useEffect(() => {
    try {
      weatherServices
        .getWeather()
        .then(response => {
          console.log(response);
          setWeather(response);
        })

      
      
        newsServices
          .getArticle()
          .then(response => {
            console.log(response);
            setArticles(response);
          })
    } catch (error) {
      console.log(error);
    }
    
  }, [])

  return (
    <div className="App">
      {(typeof weather.main != 'undefined') ? (
        <Weather weatherData={weather}/>
      ): (
        <div className="Loading">
          <Dimmer>
            <Loader>Loading...</Loader>
          </Dimmer>
        </div>
      )}
      {(typeof articles.length > 0) ? (
        <Container>
          <Header as='h2' style = {{ textAlign: 'center', margin: 20}}>
            bitcoin articles
          </Header>
          <ArticleList articles = {articles} />
        </Container>
      ): (
        <div className="Loading">
          <Dimmer>
            <Loader>Loading...</Loader>
          </Dimmer>
        </div>
      )}

    </div>
  );
}

export default App;
