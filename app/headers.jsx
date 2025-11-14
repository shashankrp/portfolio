"use client"
import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/navigation'

function Headers(props) {
    const router = useRouter();
    const handleNav = (e, path) => {
        e.preventDefault();
        router.push(path);
    };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid header-nav">
                <a className="navbar-brand font-monospace" href="/">Shashank RP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Nav Section */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    {/* for desktop view */}
                    <ul className="navbar-nav px-45 px-md-0 justify-content-between flex-md-row d-none d-lg-inline-flex">
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page1" href="./" onClick={e => handleNav(e, '/')}>Home</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page3" href="./skills" onClick={e => handleNav(e, '/skills')}>Skills</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page4" href="./experience" onClick={e => handleNav(e, '/experience')}>Experience</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page2" href="/blog" onClick={e => handleNav(e, '/blog')}>Blog</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page5" href="./contact" onClick={e => handleNav(e, '/contact')}>Contact</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page6" href="./about" onClick={e => handleNav(e, '/about')}>About</a>
                        </li>
                    </ul>
                    {/* for mobile view */}
                    <ul className="navbar-nav px-45 px-md-0 justify-content-between flex-md-row d-lg-none">
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page1" href="./">Home</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page3" href="./skills">Skills</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page4" href="./experience">Experience</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page2" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page5" href="./contact">Contact</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link active" aria-current="page6" href="./about">About</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link d-flex font-monospace active" target='_blank' href="https://drive.google.com/file/d/1gzb3m_BdrhNwRfRFuF7IblGXIHCnRZip/view?usp=sharing">
                                Resume &nbsp;<i className='bi bi-download align-content-end' style={{ paddingLeft: "13rem" }}></i>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Footer Section */}
                <ul className="nav justify-content-end flex-row-reverse d-none d-lg-inline-flex">
                    <li className="nav-item">
                        <a className="nav-link d-flex resume-btn ms-auto" target='_blank' rel="noopener noreferrer" href="https://drive.google.com/file/d/1gzb3m_BdrhNwRfRFuF7IblGXIHCnRZip/view?usp=sharing">
                            <i className='bi bi-download text-white'></i>&nbsp;&nbsp;<p className='fw-normal font-monospace text-white h6 pt-1'>Resume</p>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Headers.propTypes = {
}

export default Headers
