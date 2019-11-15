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

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
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

    const filterWithSearch = search => {
      setFilterData(displayData.filter( data => {
        return data.name.toLowerCase().includes(search.toLowerCase());
      }))
    }

    useEffect(() => {
      filterWithSearch("");
    }, [])

  return (
    <section className="character-list">
      <SearchForm filterWithSearch={filterWithSearch} />
      <Row>
      {filterData && 
        filterData.map( d => (
          <CharacterCard key={d.id} data={d} />
        ))
      }
      </Row>
      <Pagination />
    </section>
  );
}
