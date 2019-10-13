import React, { Component } from 'react'
import Header from '../Common/Header'

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
                />
            </React.Fragment>
        )
    }
}
export default Home