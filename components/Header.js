import { Component } from 'react';
import { Link } from '../routes'

export default () => (
    <nav className="navbar navbar-toggleable-md bg-faded navbar-inverse bg-primary">
        <button className="navbar-toggler navbar-toggler-right" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link route='index'>
            <a className="navbar-brand">ReportsDFS</a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link route='index'><a className="nav-link">Home</a></Link>
                </li>
                <li className="nav-item">
                  <Link route='blog'><a className="nav-link">Blog</a></Link>
                </li>
            </ul>
        </div>
    </nav>
)