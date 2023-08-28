import logo from './logo.svg';
import './App.css';

import Navbar from './components.js/navbar';
import ContentBox from './components.js/contentbox';
import query from './components.js/navbar'

import React,{Component,useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
}from "react-router-dom";

function App() {
  const [query,setQuery]=useState('');
    
  const handleInputChange=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar
          query={query}
          handleInputChange={handleInputChange}
          />
          <Switch>
          <Route exact path="/">
            <ContentBox keyword='All' country='All' timestamp='All' />
          </Route>
          <Route exact path="/us">
            <ContentBox keyword='All' country='United States' timestamp='All' />
          </Route>
          <Route exact path="/in">
            <ContentBox keyword='All' country='India' timestamp='All' />
          </Route>
          <Route exact path="/fr">
            <ContentBox keyword='All' country='France' timestamp='All' />
          </Route>
          <Route exact path="/jp">
            <ContentBox keyword='All' country='Japan' timestamp='All' />
          </Route>
          <Route exact path="/gr">
            <ContentBox keyword='All' country='Germany' timestamp='All' />
          </Route>
          <Route exact path="/nt">
            <ContentBox keyword='All' country='Netherlands' timestamp='All' />
          </Route>
          <Route exact path="/sp">
            <ContentBox keyword='All' country='Singapore' timestamp='All' />
          </Route>
          <Route exact path="/jun">
            <ContentBox keyword='All' country='All' timestamp='2023-06' />
          </Route>
          <Route exact path="/may">
            <ContentBox keyword='All' country='All' timestamp='2023-05' />
          </Route>
          <Route exact path="/aug">
            <ContentBox keyword='All' country='All' timestamp='2023-08' />
          </Route>
          <Route exact path="/apr">
            <ContentBox keyword='All' country='All' timestamp='2023-04' />
          </Route>
          <Route exact path="/dec">
            <ContentBox keyword='All' country='All' timestamp='2023-12' />
          </Route>
          <Route exact path="/oct">
            <ContentBox keyword='All' country='All' timestamp='2023-10' />
          </Route>
          <Route exact path="/sep">
            <ContentBox keyword='All' country='All' timestamp='2023-09' />
          </Route>
          <Route exact path="/nov">
            <ContentBox keyword='All' country='All' timestamp='2023-11' />
          </Route>
          <Route exact path="/may24">
            <ContentBox keyword='All' country='All' timestamp='2024-05' />
          </Route>
          <Route exact path="/keyword">
            <ContentBox counrty='All' timestamp='All' keyword={query}/>
          </Route>
        </Switch>
      </div>
    </Router>
        
      
    </div>
  );
}

export default App;
