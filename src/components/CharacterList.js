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
  const [displayData, setDisplayData] = useState([]);

  const [getUrl, setGetUrl] = useState(``);

  useEffect(() => {

    if(props.location.pathname === "/s/characters") {
      setGetUrl(`https://rickandmortyapi.com/api/character/`);
    } else if (props.location.pathname === "/s/locations") {
      setGetUrl(`https://rickandmortyapi.com/api/location/`);
    } else if (props.location.pathname === "/s/episodes") {
      setGetUrl(`https://rickandmortyapi.com/api/episode/`)
    }

      axios.get(getUrl)
      .then( res => {
        console.log(res.data.results);
        setDisplayData(res.data.results);
      })
      .catch( err => {
        console.log(err.data);
      })
  }, [props.refresh]);

    useEffect(() => {

    }, [charPage])

  return (
    <section className="character-list">
      <SearchForm />
      <Row>
      {displayData && 
        displayData.map( d => (
          <CharacterCard key={d.id} data={d} />
        ))
      }
      </Row>
      <Pagination />
    </section>
  );
}
