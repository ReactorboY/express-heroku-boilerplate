import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'

import image1 from '../assets/img/portfolio/01-thumbnail.jpg'

const portfolio = [
    {title:'Threads', subtitle:'illustration', image:image1},
    {title:'Explore', subtitle:'Graphic Design', image:image1},
    {title:'Finish', subtitle:'Identity', image:image1},
    {title:'Lines', subtitle:'illustration', image:image1},
    {title:'Southwest', subtitle:'illustration', image:image1},
    {title:'Window', subtitle:'illustration', image:image1}
]

class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="bg-light page-section" id="portfolio">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        </div>
                        <div className="row">
                            {portfolio.map((item, index) => {
                                return <PortfolioItem {...item} key={index} />
                            })}
                        </div>
                    </div>
            </section>
        </div>
        )
    }
}
export default Portfolio