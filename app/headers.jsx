
import React from 'react'
import PropTypes from 'prop-types'

function Headers(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Shashank RP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                    <ul className="navbar-nav px-45 px-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page1" href="/">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page2" href="/about">Blog</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page3" href="/skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page4" href="/experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page5" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page6" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Headers.propTypes = {
}

export default Headers
