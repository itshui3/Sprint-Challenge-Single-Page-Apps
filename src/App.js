import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import {Button, Row} from 'reactstrap';

import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

export default function App(props) {
  const [refresh, setRefresh] = useState(false);
  const [getUrl, setGetUrl] = useState(``);

  // if(props.location.pathname === "/s/characters") {
  //   setGetUrl(`https://rickandmortyapi.com/api/character/`);
  // } else if (props.location.pathname === "/s/locations") {
  //   setGetUrl(`https://rickandmortyapi.com/api/location/`);
  // } else if (props.location.pathname === "/s/episodes") {
  //   setGetUrl(`https://rickandmortyapi.com/api/episode/`)
  // }

  const handleSearchButton = e => {
    setGetUrl("https://rickandmortyapi.com/api/" + e.target.id);
  }

  return (
    <main>
      <Header />
      <Row>
        <Button onClick={() => {props.history.push("/")}}>Home</Button>
        <Button id="character" onClick={handleSearchButton}>Characters</Button>
        <Button id="location" onClick={handleSearchButton}>Locations</Button>
        <Button id="episode" onClick={handleSearchButton}>Episodes</Button>
      </Row>
      
      <Route exact path="/" component={WelcomePage} />

      <Route path="/s" render={props => <CharacterList {...props} refresh={refresh} getUrl={getUrl} />} />
    </main>
  );
}
