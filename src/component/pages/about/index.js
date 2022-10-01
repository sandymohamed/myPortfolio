import React from 'react';
import'./style.css'
import { Link} from "react-router-dom";

const About =() =>{

        return(<section className="about" id="about">
        <h1 className="heading"> <span>about</span> me</h1>
        <div className="row">
            <div className="box-container">
                <div className="box">
                    <h3>1+</h3>
                    <p>year of experience</p>
                </div>
                <div className="box">
                    <h3>100+</h3>
                    <p>working hours</p>
                </div>
   
            </div>
    
            <div className="content">
                <h3>my name is <span>Sandy</span></h3>
                <p>I'm a front-end Developer.bachelor's degree in Specific Education( educational technology department). I'm a fast learner. </p>
                <Link to="/contact" className="btn">contact me</Link>
            </div>
        </div>
    
        <div className="row">
            <div className="progress">
                <h3>HTML<span>95%</span></h3>
                <div className="bar bar-1-1"><span></span></div>
                <h3>CSS <span>95%</span></h3>
                <div className="bar bar-1-2"><span></span></div>
                <h3>javascript<span>90%</span> </h3>
                <div className="bar bar-1-3"><span></span></div>
            </div>
    
            <div className="progress">
                <h3>Reactjs<span>80%</span></h3>
                <div className="bar bar-2-1"><span></span></div>
                <h3>jQuery <span>85%</span></h3>
                <div className="bar bar-2-2"><span></span></div>
                <h3>scss<span>90%</span> </h3>
                <div className="bar bar-2-3"><span></span></div>
            </div>
        </div>
    </section>);
    

} 
export default About ;
