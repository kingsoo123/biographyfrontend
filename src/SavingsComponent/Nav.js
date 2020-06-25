import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Nav = ()=>{
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top pl-5 pr-5">
        <Link to="/"><h4 style={{color:'#FFC107'}}>The Biographer</h4></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="https://suitup.com.ng" style={{color:'#EE7721'}}>About <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://suitup.com.ng" style={{color:'#EE7721'}}>Find Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://suitup.com.ng" style={{color:'#EE7721'}}>Stories</a>
                </li>
             
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">
                <Link to="/registration" style={{textDecoration: 'none', color:'black'}}>View Profile</Link>
                </button>
                </form>
            </div>
        </nav>
        </div>
    )
}

export default Nav;

