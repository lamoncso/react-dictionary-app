import React from "react";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props){
    return (
        <div className="Meaning">
        <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (meaning, index){
            return (
                <div key={index}>
                <span className="definition">{meaning.definition}</span>
                <br />
                <Example examples={meaning.example} />
                </div>
            );
        })}
        </section>
    </div>)
}
