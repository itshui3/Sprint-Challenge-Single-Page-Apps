import React from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import {Button, Row} from 'reactstrap';

import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

export default function App(props) {
  return (
    <main>
      <Header />
      <Row>
        <Button onClick={() => {props.history.push("/")}}>Home</Button>
        <Button onClick={() => {props.history.push("/characters")}}>Characters</Button>
        <Button>Locations</Button>
      </Row>
      
      <Route exact path="/" component={WelcomePage} />

      <Route path="/characters" render={props => <CharacterList />} />
    </main>
  );
}
