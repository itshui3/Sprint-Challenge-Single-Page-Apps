import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import {Button, Row} from 'reactstrap';

import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

export default function App(props) {
  const [refresh, setRefresh] = useState(false);
  const [getUrl, setGetUrl] = useState(``);

  const handleSearchButton = e => {
    props.history.push("/s");
    setGetUrl("https://rickandmortyapi.com/api/" + e.target.id);
    setRefresh(!refresh);
  }
  
  return (
    <main>
      <Header />
      <Row>
        <Button onClick={() => {props.history.push("/")}}>Home</Button>

        {/* Search Buttons */}

        <Button id="character" onClick={handleSearchButton}>Characters</Button>
        <Button id="location" onClick={handleSearchButton}>Locations</Button>
        <Button id="episode" onClick={handleSearchButton}>Episodes</Button>
      </Row>
      
      <Route exact path="/" component={WelcomePage} />

      <Route path="/s" render={props => <CharacterList {...props} refresh={refresh} getUrl={getUrl} />} />
    </main>
  );
}
