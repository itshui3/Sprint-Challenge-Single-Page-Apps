import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import {Row} from 'reactstrap';

import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import Pagination from './Pagination';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [pageNum, setPageNum] = useState(0);
  const [page, setPage] = useState("1");

  const [displayData, setDisplayData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {

    console.log('Initial Getting...');
    
      axios.get(props.getUrl)
      .then( res => {
        console.log("Getting from " + props.getUrl);
        console.log(res.data);
        setDisplayData(res.data.results);
        setPageNum(res.data.info.pages);
      })
      .catch( err => {
        console.log(err.data);
      })
  }, [props.refresh]);

  const pageLink = e => {
    setPage(e.target.id.toString());
  }

  useEffect(() => {
    axios.get(props.getUrl + "?page=" + page)
    .then( res => {
      console.log("Getting from " + props.getUrl);
      console.log(res.data);
      setDisplayData(res.data.results);
      setPageNum(res.data.info.pages);
    })
    .catch( err => {
      console.log(err.data);
    })

  }, [page])

  const filterWithSearch = search => {
    setFilterData(displayData.filter( data => {
      return data.name.toLowerCase().includes(search.toLowerCase());
    }))
  }

  useEffect(() => {
    filterWithSearch("");
  }, [displayData])

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
      {
        pageNum
          ? <Pagination pageNum={pageNum} pageLink={pageLink} />
          : null
      }

    </section>
  );
}
