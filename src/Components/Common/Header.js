import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="masthead d-flex">
                    <div className="container text-center my-auto">
                    <h1 className="mb-1">Stylish Portfolio</h1>
                    <h3 className="mb-5">
                        <em>A Free Bootstrap Theme by Start Bootstrap</em>
                    </h3>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                    </div>
                    <div className="overlay"></div>
                </header>
            </React.Fragment>
        )
    }
}
export default Header