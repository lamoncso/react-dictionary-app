import React from "react";
import "./Photos.css";

export default function Photos(props){
    console.log(props.photos)
    if (props.photos) {
        return(
            <section className="Photos">
                <div className="row">
                {props.photos.map(function(photo, index){
                    return(
                        <div key={index} className="col-4 img-fluid">
                            <a href={photo.src.original} target="_blank" rel="noreferrer"
                            alt="photos from pexels">
                        <img src={photo.src.tiny}/>
                        </a>
                        </div>
                    )
                }
                )}
                </div>
            </section>

        )
    }else{
        return null;
    }
}