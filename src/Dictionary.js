import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [results, setResults]=useState(null);
    let [loaded, setLoaded]=useState(false);
    let [photos, setPhotos]=useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
      setPhotos(response.data.photos);
    }

    function search(){
      //Documentation: https://dictionaryapi.dev/
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios.get(apiUrl).then(handleResponse);

      let pexelsApiKey =
        "LsPYNrgU5nt06bs2MCgohXjPBE00uDNC88WReHIjDOFXsHjNHDrOS0lN";
      let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
      let header = { Authorization: `Bearer ${pexelsApiKey}` };
      console.log(header);
      axios
        .get(pexelsApiUrl, { headers: header })
        .then(handlePexelsResponse);
    }

    function handleSubmit(event){
      event.preventDefault();
      search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
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
        <form onSubmit={handleSubmit} autoFocus={true}>
          <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
        </form>
        
        <div className="hint">Suggested words: sunset, wine, yoga, nature...</div>
        </section>
        <Results results={results}/>
      </div>
    );
    }else{
      load();
      return "Loading";
    }
}