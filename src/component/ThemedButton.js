import './App.css';
import React from 'react'
import { ThemeContext } from './context';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './pages/header/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun , faMoon} from '@fortawesome/free-solid-svg-icons'


class ThemeButton extends React.Component {

  state = { 
    headerClass :'header',
    menuClass : 'fa fa-bars',
 }
 
clickMenu = () =>{ if(this.state.menuClass.includes('fa-bars') ){ this.setState({
headerClass :'active',
menuClass : 'fa fa-times'
})}else {
  this.setState({
    headerClass :'header',
    menuClass : 'fa fa-bars',
  })
}
const btn =document.getElementById('menu-btn');
const btn2 =document.getElementById('menu-btn2');
btn2.classList.toggle('circle-x');
}

 clickIcon=()=>{
  const ic2 = document.getElementById('icon2');
  const ic = document.getElementById('icon');
  ic2.classList.toggle('icon-theme-active')
  ic.classList.toggle('icon-theme-active')
  ic2.classList.toggle('icon-theme-btn')
  ic.classList.toggle('icon-theme-btn')
}

  render(){
  //const useTheme = useContext(ThemeContext);
    return (
      <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <div 
        style={{backgroundColor: theme.background, color: theme.foreground}}
        >
        <Router>
        <button 
          id="theme-toggler"
          className={theme.themeClass}
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
             <FontAwesomeIcon onClick={()=> this.clickIcon()} id='icon2' className='icon-theme-active' icon={faMoon}/>
            <FontAwesomeIcon id='icon' onClick={()=> this.clickIcon()} className='icon-theme-btn ' icon={faSun}/> 
        </button>
        <Header 
        header={this.state.headerClass} 
        menu={this.state.menuClass} 
        clickMenu={this.clickMenu} 
        />

       
        </Router>
        </div>
      )}
    </ThemeContext.Consumer>
    );
  }}

export default ThemeButton