import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import {Row} from 'reactstrap';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import Pagination from './Pagination';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [charPage, setCharPage] = useState("1");
  const [characters, setCharacters] = useState([]);

  console.log(props);

  useEffect(() => {

    if(props.location.pathname === "/s/characters") {
      axios.get(`https://rickandmortyapi.com/api/character/`)
      .then( res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch( err => {
        console.log(err.data);
      })
    } else if (props.location.pathname === "/s/locations") {
      axios.get(`https://rickandmortyapi.com/api/location/`)
      .then( res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch( err => {
        console.log(err.data);
      })
    }

  }, [props.refresh]);

    useEffect(() => {

    }, [charPage])

  return (
    <section className="character-list">
      <SearchForm />
      <Row>
      {characters && 
        characters.map( d => (
          <CharacterCard key={d.id} data={d} />
        ))
      }
      </Row>
      <Pagination />
    </section>
  );
}
