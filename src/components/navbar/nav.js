import React, { Component, Link } from "react";
import "./nav.scss";

export default class Nav extends Component {
    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="logo">Ky</div>
                    <div className="about">portfolio</div>
                    <div className="portfolio">portfolio</div>
                    <div className="contact">contact</div>

                    <div className="linked-in"><img alt="linked in logo" src="#"></img></div>
                    <div className="github"><img alt="github logo" src="#"></img></div>
                </div>
            </>
        )
    }
}