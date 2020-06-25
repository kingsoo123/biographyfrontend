import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Banner from './Banner';
import Nav from './Nav';
import Registration from './Registration';
import Profile from './Profile';


class SavingsApp extends Component{
    render(){
        return(
            <BrowserRouter>
            <div className="App">
               <Nav/>
               <Route exact path="/" component={Banner}/>
               <Route path="/registration" component={Registration}/> 
               <Route path="/profile" component={Profile}/>
            </div>
            </BrowserRouter>
        )
    }
}


export default SavingsApp;