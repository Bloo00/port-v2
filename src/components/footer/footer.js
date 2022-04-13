import React, { Component, Link } from "react";

import "./footer.css";


export default class Foot extends Component {
    render() {
        return (
            <>
                <div className="footer-wrapper">
                    <ul>
                        <li className="copywrite">2022 Kabin Yang</li>
                        {/* make links to the top stuff */}
                        <li>123</li>
                        <li>abc</li>
                        <li>zyx</li>
                        <li>987</li>
                    </ul>
                </div>
            </>
        )
    }
}