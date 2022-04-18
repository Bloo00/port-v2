import React, { Component, Link } from "react";
import "./footer.css";


export default class Foot extends Component {
    render() {
        return (
            <>
                <div className="footer-wrapper">
                    <div className="copywrite">2022 Kabin Yang</div>
                    <div className="about">portfolio</div>
                    <div className="portfolio">portfolio</div>
                    <div className="contact">contact</div>
                </div>
            </>
        )
    }
}