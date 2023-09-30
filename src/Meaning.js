import React from "react";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props){
    return (
        <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (meaning, index){
            return (
                <div key={index}>
                <p>
                <strong>Definition: </strong>{meaning.definition}
                <br />
                <Example examples={meaning.example} />
                </p>
                </div>
            );
        })}
    </div>)
}
