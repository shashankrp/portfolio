
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
                {/* Nav Section */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav px-45 px-md-0 justify-content-between flex-md-row">
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page1" href="./">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page2" href="/about">Blog</a>
                        </li> */}
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page3" href="./skills">Skills</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page4" href="./experience">Experience</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page5" href="./contact">Contact</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page6" href="./about">About</a>
                        </li>
                    </ul>

                    <ul className="nav justify-content-end flex-row-reverse d-lg-none">
                    <li className="nav-item">
                        <a className="nav-link active" target='_blank' aria-current="page" href="https://github.com/shashankrp"><i className="bi bi-github text-white"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" target='_blank' href="https://www.linkedin.com/in/shashank-r-p-5a866b15a/"><i className='bi bi-linkedin text-white'></i></a>
                    </li>
                </ul>
                </div>
                {/* Footer Section */}
                <ul className="nav justify-content-end flex-row-reverse d-none d-lg-inline-flex">
                    <li className="nav-item">
                        <a className="nav-link active" target='_blank' aria-current="page" href="https://github.com/shashankrp"><i className="bi bi-github text-white"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" target='_blank' href="https://www.linkedin.com/in/shashank-r-p-5a866b15a/"><i className='bi bi-linkedin text-white'></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Headers.propTypes = {
}

export default Headers
