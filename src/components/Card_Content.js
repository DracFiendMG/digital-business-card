import React from "react";
import About from "./About";
import Buttons from "./Buttons";
import Interests from "./Interests";
import MyLinks from "./MyLinks";

export default function Card_Content() {
    return (
        <div className="card--layout">
            <h3 className="card--name">Sreeram Reddy</h3>
            <h4 className="card--role">Frontend Developer</h4>
            <p className="card--web">sreeramrdy.website</p><br/>
            <Buttons/><br/>
            <About/><br/>
            <Interests/>
        </div>
    )
}