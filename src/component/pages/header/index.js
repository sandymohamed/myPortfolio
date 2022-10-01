import React from 'react';
import'./style.css'
import {ThemeContext} from "../../context"
import { Route, Link, Redirect} from "react-router-dom";
import Home from '../home';
import About from '../about';
import Services from '../services';
import Portfolio from '../portfolio';
import Contact from '../contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faCircleXmark} from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {  
  const {header, menu,clickMenu }= props;


//    const clickMenuBtn=()=>{
//     const btn =document.getElementById('menu-btn');
//     const btn2 =document.getElementById('menu-btn2');

//     btn2.classList.remove('circle-x');
//   }
        return (
     <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <div >
             <header className={header}
                style={{backgroundColor: theme.background, color: theme.foreground}}
                >
                <div className="user">
                    <img src={process.env.PUBLIC_URL + '/image/pic.jpg'} alt="" /> 

                    <h3>Sandy Mohammed</h3>
                    <p>front-end developer</p>
                </div>
            
                <nav className="navbar">
                <Link to='/home'>home</Link>
                <Link to="/about">about</Link>
                <Link to="/services">servicse</Link>
                <Link to="/portfolio">portfolio</Link>
                <Link to="/contact">contact</Link>
                </nav>
            </header>
                <div id="menu-btn" className='menu-btn'  onClick={() => clickMenu()}> <FontAwesomeIcon icon={faBars}/> </div>
                <div id="menu-btn2" className='menu-btn circle-x'  onClick={() => clickMenu()}> <FontAwesomeIcon icon={faCircleXmark}/> </div>

                <Route path="/home" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contact" component={Contact}/>
                <Redirect from="/" to="/home" />
                </div>
                )}

    </ThemeContext.Consumer>  
                              );
    

} 
export default Header ;
