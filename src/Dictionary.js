import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [results, setResults]=useState(null);
    let [loaded, setLoaded]=useState(false);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function search(){
      //Documentation: https://dictionaryapi.dev/
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
        search();
    }

    function load(){
      setLoaded(true);
      search();
    }

    if (loaded){
    return (
      <div className="Dictionary">
        <section>
        <h1>What are you looking for?</h1>
        <form onSubmit={search} autoFocus={true}>
          <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
        </form>
        
        <div className="hint">Suggested words: sunset, wine, yoga, nature...</div>
        </section>
        <Results results={results}/>
      </div>
    );
    }else{
      load();
    }
}