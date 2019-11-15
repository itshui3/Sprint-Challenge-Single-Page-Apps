import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import {Row} from 'reactstrap';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charPage, setCharPage] = useState("1");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then( res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch( err => {
        console.log(err.data);
      })

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  }, []);

    useEffect(() => {

    }, [charPage])

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <Row>
      {characters && 
        characters.map( d => (
          <CharacterCard key={d.id} data={d} />
        ))
      }
      </Row>
    </section>
  );
}
