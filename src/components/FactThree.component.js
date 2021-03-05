import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import CutTheNet from "../hoc/CutTheNet.jpg"
import NumberThree from "../hoc/NumberThree.jpg"

import FactTwo from './FactTwo.component'

export default class FactThree extends Component{
    render() {
        return (
            
            <div className='d-flex'>
            <FactTwo/>
            <div className="col-4">
            <div className="jumbotron text-light text-center" id="mumboJumbo">
            <h4>Fact Number</h4>
            <img className="factNumberThree"src={NumberThree} alt=""/>
            
            <div className="card">
                <img className="card-img-top fact-img-top" src={CutTheNet} alt=""/>
                <div className="card-body">
                    <p className="card-text text-dark" id='small-text' style={{wordWrap:'normal'}}>  No other school can match UK's ability to develop players, UK's 29 NBA players are the most of any college basketball program.</p>
                </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}