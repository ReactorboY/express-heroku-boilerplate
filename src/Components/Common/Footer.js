import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 
class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer text-center">
                <div className="container">
                <ul className="list-inline mb-5">
                    <li className="list-inline-item">
                    <Link className="social-link rounded-circle text-white mr-3" to="#">
                        <i className="icon-social-linkedin"></i>
                    </Link>
                    </li>
                    <li className="list-inline-item">
                    <Link className="social-link rounded-circle text-white mr-3" to="#">
                        <i className="icon-social-twitter"></i>
                    </Link>
                    </li>
                    <li className="list-inline-item">
                    <Link className="social-link rounded-circle text-white" to="#">
                        <i className="icon-social-github"></i>
                    </Link>
                    </li>
                </ul>
                <p className="text-muted small mb-0">Copyright &copy; Reactorboy 2019</p>
                </div>
            </footer>
            </React.Fragment>
        )
    }
}
export default Footer