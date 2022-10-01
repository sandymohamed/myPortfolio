import React, { Component } from 'react';
import'./style.css'
import axios from 'axios'

class Services extends Component{
state ={
    services :[]
}
 
componentDidMount(){
    axios.get('js/data.json').then(res => {this.setState({
        services: res.data.services
    })})
}

render(){
    const {services} =this.state;
    const servicesList = services.map((service) => {
        return(
            <div className="box" key={service.id}>  
            <i className={service.icon_name}></i>
           <h3>{service.title}</h3>
           <p>{service.body}</p>
         </div >   
        )
    })

        return ( <section className="services" id="services">
        <h1 className="heading"> my <span>services</span></h1>
      <div className="box-container">
            {servicesList}

  </div>
  
    </section>);
    

} }
export default Services ;
