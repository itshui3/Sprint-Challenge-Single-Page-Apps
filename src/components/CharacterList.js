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

  useEffect(() => {
    // it takes 2 clicks, figure out why

      axios.get(props.getUrl)
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
