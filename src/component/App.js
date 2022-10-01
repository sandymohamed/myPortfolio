import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './page/header'

class App extends React.Component {
  state = { 
    headerClass :'header',
    menuClass : 'fa fa-bars',
    themeClass :'fas fa-moon theme'
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
}

clickTheme =() =>{
  if(this.state.themeClass.includes('fa-moon')){
  this.setState({themeClass :'fas fa-sun theme',})}
  
    if(this.state.themeClass.includes('fa-sun')){
        document.body.classList.toggle('active') } 
   };




  render()
{  return (
<Router>
<Header header={this.state.headerClass} menu={this.state.menuClass} clickMenu={this.clickMenu} theme={this.state.themeClass} clickTheme={this.clickTheme}/>
  </Router>
  );}

}
export default App;
