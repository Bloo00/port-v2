import React, { Component } from "react";

import "./home.scss";

import Nav from "../navbar/nav";
import barGraph from "./bargraph/bar";


export default class Home extends Component {
    render() {
        return (
            <> 
                <Nav />
                <div className="container">
                    <div className="light-portion">
                        <div className="top-words">
                            <h1 className="big-header">h1</h1>
                            <h3 className="about">h3</h3>
                        </div>

                        <div className="face-holder">
                            <img src="#" className="my-face" alt="my face" />
                        </div>
                        <hr className="divider" />

                        <div className="random-pics-holder">
                            <img className="pics" src="#" alt="somepics" />
                            <img className="pics" src="#" alt="somepics" />
                            <img className="pics" src="#" alt="somepics" />
                            <img className="pics" src="#" alt="somepics" />
                            <img className="pics" src="#" alt="somepics" />
                            <img className="pics" src="#" alt="somepics" />
                        </div>
                    </div>

                    <div className="dark-portion">
                        <div className="joke-skills">
                            <div className="joke-titles">My fancy skills :D</div>
                            <barGraph />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}