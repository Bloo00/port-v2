import React, { Component } from "react";

import "./home.scss";

import Nav from "../navbar/nav";
import Foot from "../footer/footer";

export default class Home extends Component {
    render() {
        return (
            <>
                <Nav />
                <div className="container">
                    <div className="light-portion">
                        <div className="top-portion">
                            <div className="top-words">
                                <h1 className="big-header">Hi, I'm Kabin.</h1>
                                <h3 className="about">I'm an aspiring web dev based near Los Angeles, California.</h3>
                                <h5 className="smol-about">Recent General Assembly. So since then i've been enjoying learning more and more tech! ...</h5>
                            </div>
                            <div className="face-holder">
                                <img src="https://pbs.twimg.com/media/FPz5KMFUcAETGmF.png" className="my-face" alt="my face" />
                            </div>
                        </div>
                        {/* <hr className="divider" /> */}
                        {/* <div className="random-pics-holder">
                            <img className="pics" src="https://pbs.twimg.com/media/FPz5KMFUcAETGmF.png" alt="somepics" />
                            <img className="pics" src="https://pbs.twimg.com/media/FPz5KMFUcAETGmF.png" alt="somepics" />
                            <img className="pics" src="https://pbs.twimg.com/media/FPz5KMFUcAETGmF.png" alt="somepics" />
                            <img className="pics" src="https://pbs.twimg.com/media/FPz5KMFUcAETGmF.png" alt="somepics" />
                            <img className="pics" src="https://pbs.twimg.com/media/FPz5KMFUcAETGmF.png" alt="somepics" />
                            <img className="pics" src="https://pbs.twimg.com/media/FPz5KMFUcAETGmF.png" alt="somepics" />
                        </div> */}
                    </div>

                    <hr className="divider" />

                    <div className="dark-portion">
                        <div className="skills">
                            <div className="skill-title">My fancy skills :D</div>
                            <ol className="skill-list">
                                <div className="skill">Front-end development</div>
                                <div className="skill">Html/CSS (working on becomeing a css wizzard)</div>
                                <div className="skill">JavaScript</div>
                                <div className="skill">more to soon...</div>
                            </ol>
                        </div>
                    </div>

                    <hr className="divider" />

                    <div className="light-portion">
                        <div className=" tidbits-holder">
                            <div className="tidbitty-pic-holder"><img className="tidbity-pic" src="https://pbs.twimg.com/media/FPz5KMFUcAETGmF.png" alt="..." /></div>
                            <div className="my-tidbits-holder">
                                <h2 className="tidbit-title">Bloo's tidbits</h2>
                                <div className="tidbits">
                                    With that title I'm sure you can tell by now I go by Bloo.<br />
                                    I love rearranging my room in the middle of the night.<br />
                                    Cooking yummy foods I see online is my favorite.<br />
                                    I want to retire in a cool asian metropolis :D.<br />
                                    Random cleaning springs are a thing that happens not often enuff for me.<br />
                                    To be cont...<br />
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="divider" />

                    <div className="dark-portion">
                        <div className="story-holder">
                            <h2 className="story-title">Bloo's life</h2>
                            <h4 className="story-body"></h4>
                        </div>
                        <div className="story-pic-holder"><img className="story-pic" alt="baby pic of bloo" src="#" /></div>
                    </div>
                </div>
                <Foot />
            </>
        )
    }
}