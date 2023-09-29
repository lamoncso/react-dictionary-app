import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword]=useState("");

    function search(event){
        event.preventDefault();
        alert(`Searching for the definiton of ${keyword}!`);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return (
      <div className="Dictionary">
        <form onSubmit={search} autoFocus={true}>
          <input type="search" onChange={handleKeywordChange}/>
        </form>
      </div>
    );
}