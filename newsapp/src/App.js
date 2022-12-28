
import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  BrowserRouter,

  Link
} from "react-router-dom";

class App extends Component {
  c='John'
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        
        
        <Routes>
        <Route path="/" element={<News key="general" country="us" category="general"/>} />
          <Route exact path="/business" element={<News key="business" country="us" category="business"/>} />
          <Route exact path="/sports" element={<News key="sports" country="us" category="sports"/>} />
          <Route exact path="/entertaintment" element={<News key="entertaintment" country="us" category="entertaintment"/>} />
          <Route exact path="/health" element={<News key="health" country="us" category="health"/>} />
          <Route exact path="/science" element={<News key="health" country="us" category="health"/>} />
          <Route exact path="/technology" element={<News key="health" country="us" category="health"/>} />
          <Route exact path="/sports" element={<News key="sports" country="us" category="sports"/>} />
          
          
          </Routes>
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

