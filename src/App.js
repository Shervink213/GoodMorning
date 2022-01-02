import React, { useEffect, useState } from "react";
import weatherServices from './services/weatherData';
import newsServices from './services/newsData';
import { Dimmer, Loader, Container, Header } from 'semantic-ui-react';
import Weather from './components/Weather';
import ArticleList from "./components/ArticleList";
import "./App.css";




function App() {
  const [weather, setWeather] = useState([]);
  //const [articles, setArticles ] = useState([]);

  useEffect(() => {

    weatherServices
      .getWeather()
      .then(response => {
        setWeather(response);
      }) 

    
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



        <Container>
          <Header as='h2' style = {{ textAlign: 'center', margin: 20}}>
            Articles
          </Header>
          <ArticleList />
        </Container>

    </div>
    
  );
}

export default App;
