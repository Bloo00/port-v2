import React, { Component } from "react";

let CanvasJSReact = require('./canvasjs.react');
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class barGraph extends Component {
    render() {
        const options = {
            animatoinEnabled: true,
            theme: "light2",
            title:{
                text: "My skillllss :>"
            },
            axisX: {
                title: "stoof",
                // reversed: true,
            },
            axisY: {
                title: "How good i am at it!",
                includeZero: true,
            },
            data: [{
                type: 'bar',
                dataPoints: [
                    { y:10, lable: "first option"},
                    { y:15, lable: "second option"},
                    { y:19, lable: "third option"},
                    { y:14, lable: "fourth option"},
                    { y:12, lable: "fifth option"},
                ]
            }]
        }

        return(
            <>
                <CanvasJSChart options = {options} />
            </>
        )
    }
}