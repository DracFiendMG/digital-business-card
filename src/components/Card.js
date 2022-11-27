import React from "react";
import Card_Content from "./Card_Content";
import Photo from "./Photo";
import MyLinks from "./MyLinks";

export default function Card() {
    return (
        <div className="card">
            <br/>
            <br/>
            <Photo/>
            <Card_Content/>
            <MyLinks/>
            <br/>
            <br/>
        </div>
    )
}