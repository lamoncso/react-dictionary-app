import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Results(props){
    if(props.results){
    return(
        <div className="Results">
            <h2 className="mt-3">{props.results.word}</h2>
            {props.results.meanings.map(function (meaning, index) {
                return (
                <div key={index}>
                <Meaning meaning={meaning} />
                <Synonyms synonyms={meaning.synonyms} />
            </div>
            );
            })}
        </div>
    )
}else{
        return null
    }
}