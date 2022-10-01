import React from 'react';
import'./style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Home =() =>{

        return (
        <section className="home" id="home">
        <div className="content">
            <h3>Sandy Mohammed</h3>
            <p>i'm a front-end developer</p>
            <a  href={process.env.PUBLIC_URL + '/Sandy Mohammed.docx'} className="btn" rel="noreferrer" download> Resume</a>
        </div>
    
        <div className="share">
            <a href="https://github.com/sandymohamed" > <FontAwesomeIcon icon={faGithub} /> </a>
            <a href='https://codepen.io/sandy-sawy'> <FontAwesomeIcon icon={faCodepen}/> </a>
            <a href='https://www.linkedin.com/in/sandy-mohammed-873b821bb/'> <FontAwesomeIcon icon={faLinkedin}/> </a>

        </div>
    </section>);
    

} 
export default Home ;
