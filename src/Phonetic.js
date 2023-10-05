import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
    return (
      <div className="Phonetic">
        <button>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <i class="fa-solid fa-volume-high audio-icon"></i>
         <span className="text">
        {props.phonetic.text}
        </span>
        </a>
        </button>
      </div>
    );
}