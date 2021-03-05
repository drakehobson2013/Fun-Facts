import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import UK1948 from "../hoc/UK1948.jpg"
import NumberOne from "../hoc/NumberOne.jpg"
export default class FactOne extends Component{
    render() {
        return (
            
            
            <div className="col-4">
            <div className="jumbotron text-light text-center" id="mumboJumbo">
            <h4>Fact Number</h4>
            <img className="factNumberOne"src={NumberOne} alt=""/>
            
            <div className="card">
                <img className="card-img-top fact-img-top" src={UK1948} alt=""/>
                <div className="card-body">
                    <p className="card-text text-dark">The first ever Kentucky men's basketball game was on February 6, 1903 against Georgetown College. It was a DEVASTATING loss of 15-6.</p>
                </div>
            </div>
            </div>
            </div>
            
           
            
            
        )
    }
}





