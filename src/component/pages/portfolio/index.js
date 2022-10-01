import React, { Component } from 'react';
import'./style.css'
import axios from 'axios'

class Portfolio extends Component{
state={
    portfolio : []
}

componentDidMount(){
    axios.get('js/data.json').then(res =>{
this.setState({ portfolio :res.data.portfolio})    })
}



    render(){
const {portfolio} =this.state;
const PortfolioList = portfolio.map((portfolio) =>{
    return (
        
        <div className="box" key={portfolio.id}>
        <img src={portfolio.image} alt="" />
        <div className="content" >
            <h3>project {portfolio.id} </h3>
            <a href={portfolio.link} className="link">visit site</a>
        </div>
    </div>
    )
})



        return ( <section className="portfolio" id="portfolio">
        <h1 className="heading"> my <span>portfolio</span></h1>
        <div className="box-container">
  
        {PortfolioList}
        </div>
  
    </section>);
    

} }
export default Portfolio ;
