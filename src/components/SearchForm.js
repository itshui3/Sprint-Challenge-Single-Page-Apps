import React, { useState, useEffect } from "react";
import {Button} from 'reactstrap';

export default function SearchForm(props) {
  const[search, setSearch] = useState("");

  const onSearch = e => {
    setSearch(e.target.value);
  }

  const filter = props.filterWithSearch;


  useEffect(() => {
    console.log(search);
  }, [search])

  return (
    <section className="search-form">
      <form onSubmit={filter}>
      <input type='text' onChange={onSearch} value={search} />
      <Button>Search!</Button>
      </form>
    </section>
  );
}
