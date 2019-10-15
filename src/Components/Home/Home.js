import React, { Component } from 'react'
// import Nav from '../Common/Nav'
import Header from '../Common/Header'
import About from '../Common/About'
import Service from '../Common/Service'
import Project from '../Common/Project'
import Footer from '../Common/Footer'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Nav /> */}
                <Header title="Let's Build Together" 
                        subtitle="Simplicity is the soul of efficiency - Austin Freeman"
                        image="" 
                />
                <About title="A Full Stack Developer" description="Hey, I'm Mohd Hussain, A full stack developer, Gamer and Problem Solver" />
                <Service />
                <Project />
                <Footer />
            </React.Fragment>
        )
    }
}
export default Home