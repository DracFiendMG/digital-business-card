import React from "react";
import myImage from "../images/MyPhoto_Croppd.jpg"

export default function Photo() {
    return (
        <img src={myImage} className="photo"></img>
    )
}