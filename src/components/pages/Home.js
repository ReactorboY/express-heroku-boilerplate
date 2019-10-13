import React, { Component } from 'react'
import Header from '../Common/Header'
import image from '../assets/img/header-bg.jpg'
import Portfolio from '../Common/Portfolio'

// re-usnbale components
import Services from '../Common/Services'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header
                    title="Welcome to Our Lab"
                    subtitle="It's Nice To Meet You"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />
                <Services />
                <Portfolio />
            </React.Fragment>
        )
    }
}
export default Home