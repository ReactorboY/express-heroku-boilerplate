import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggled: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu = () => {
        let {toggled} = this.state
        this.setState({toggled: !toggled})
    }

    render() {
        return (
            <React.Fragment>    
            <Link className={this.state.toggled ? 'menu-toggle rounded active': 'menu-toggle rounded'} onClick={this.toggleMenu} to="\#">
                <i className={this.state.toggled ? 'fas fa-times' : 'fas fa-bars'}></i>
            </Link>
            <nav id="sidebar-wrapper" className={this.state.toggled ? 'active': ''}>
                <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <Link className="js-scroll-trigger" to="#page-top">Start Bootstrap</Link>
                </li>
                <li className="sidebar-nav-item">
                    <Link className="js-scroll-trigger" to="#page-top">Home</Link>
                </li>
                <li className="sidebar-nav-item">
                    <Link className="js-scroll-trigger" to="#about">About</Link>
                </li>
                <li className="sidebar-nav-item">
                    <Link className="js-scroll-trigger" to="#services">Services</Link>
                </li>
                <li className="sidebar-nav-item">
                    <Link className="js-scroll-trigger" to="#portfolio">Portfolio</Link>
                </li>
                <li className="sidebar-nav-item">
                    <Link className="js-scroll-trigger" to="#contact">Contact</Link>
                </li>
                </ul>
            </nav>
            </React.Fragment>
        )
    }
}
export default Nav