import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import HomeImg from "../hoc/HomeImg.jpg"
export default class Home extends Component {
    render(){
        return(
        <div className="container homeContainer text-center container-fluid">
            <h1 className="text-center text-light">
                Welcome to Kentucky Wildcats Fun Facts!
            </h1>
            <div className="card">
                <img className="card-img-top"  src={HomeImg} alt=""/>
                <div className="card-body">
                    <p className="card-text text-dark"> Use the navigation above to discover three fun facts about the University of Kentucky Basketball Program.</p>
                </div>
            </div>
            <br/>
        </div>
        )}
}