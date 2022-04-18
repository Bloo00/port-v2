import React, { Component, Link } from "react";
import "./nav.scss";

export default class Nav extends Component {
    render() {
        return (
            <>
                <div className="wrapper">
                    <button className="logo cursor"></button>
                    <div className="about cursor">about</div>
                    <div className="portfolio cursor">portfolio</div>
                    <div className="contact cursor">contact</div>

                    <div className="linked-in cursor"><img alt="linked in logo" src="#"></img></div>
                    <div className="github cursor"><img alt="github logo" src="#"></img></div>
                </div>
            </>
        )
    }
}