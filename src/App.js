import React, {useState} from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import {Button, Row} from 'reactstrap';

import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

export default function App(props) {
  const [refresh, setRefresh] = useState(false);
  return (
    <main>
      <Header />
      <Row>
        <Button onClick={() => {props.history.push("/")}}>Home</Button>
        <Button onClick={() => {props.history.push("/s/characters"); setRefresh(!refresh);}}>Characters</Button>
        <Button onClick={() => {props.history.push("/s/locations"); setRefresh(!refresh);}}>Locations</Button>
      </Row>
      
      <Route exact path="/" component={WelcomePage} />

      <Route path="/s" render={props => <CharacterList {...props} refresh={refresh} />} />
    </main>
  );
}
