import React, { Component } from 'react'
import {HashLink as Link} from 'react-router-hash-link'

class About extends Component {
    render() {
        return (
            <section className="content-section bg-light" id="about">
                <div className="container text-center">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                    <h2>{this.props.title}</h2>
                    <h4 className="lead mb-5">{this.props.description}</h4>
                    <Link className="btn btn-dark btn-xl js-scroll-trigger" smooth to="#services">What We Offer</Link>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
export default About