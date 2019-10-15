import React, { Component } from 'react'
import {HashLink as Link} from 'react-router-hash-link'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="masthead d-flex">
                    <div className="container text-center my-auto">
                    <h1 className="mb-1">{this.props.title}</h1>
                    <h3 className="mb-5">
                        <em>{this.props.subtitle}</em>
                    </h3>
                    <Link className="btn btn-primary btn-xl js-scroll-trigger" smooth to="#about">Find Out More</Link>
                    </div>
                    <div className="overlay"></div>
                </header>
            </React.Fragment>
        )
    }
}
export default Header