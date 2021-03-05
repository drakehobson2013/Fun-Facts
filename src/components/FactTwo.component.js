import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import UK2K from "../hoc/UK2K.jpg"
import NumberTwo from "../hoc/NumberTwo.jpg"
import FactOne from './FactOne.component'


export default class FactTwo extends Component{
    render() {
        return (
           
            <div className='d-flex'>
            <div id="move">
         <FactOne/>
         </div>
            <div className="col-4">
            <div className="jumbotron text-light text-center" id="mumboJumbo">
            <h4>Fact Number</h4>
            <img className="factNumberTwo"src={NumberTwo} alt=""/>
            
            <div className="card">
                <img className="card-img-top fact-img-top" src={UK2K} alt=""/>
                <div className="card-body">
                    <p className="card-text text-dark">  Kentucky was the first program to achieve 1,000 victories and the first to reach the 2,000 victory mark.</p>
                </div>
            </div>
            </div>
            </div>
            </div>
            
        )
    }
}