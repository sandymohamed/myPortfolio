
import React from 'react';
import {ThemeContext, themes} from './component/context';
import ThemeButton from './component/ThemedButton';
import { BrowserRouter as Router } from "react-router-dom";

class MyApp extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div 
    >
    <Router>
        <ThemeButton />
      </Router>
   </div>
    
  );
}

export default MyApp;