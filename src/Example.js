import React from "react";
import "./Example.css";

export default function Example(props) {
    if (props.examples){
    return (
        <div className="Example">
            <span><strong>Example: </strong></span>
            {props.examples}
        </div>
        )
        } else {
            return null;
        }
}