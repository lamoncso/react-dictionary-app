import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
    if (props.synonyms.length > 0) {
        return(
        <div className="Synonyms">
        <section>
        <h3>synonyms</h3>
        <ul>
            {props.synonyms.map(function (synonym, index){
                return (
                    <li key={index}>
                        {synonym}
                    </li>
                )
            })}
        </ul>
        </section>
        </div>
    )} else {
        return null;
    }
}