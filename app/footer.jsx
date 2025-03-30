import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <div className='container-fluid fixed-bottom bg-secondary text-white pt-2 pb-2'>
    <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://github.com/shashankrp"><i className="bi bi-github text-white"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i className='bi bi-linkedin'></i></a>
                </li>
    </ul>
    {/* <p className='text-center'><i class="bi bi-c-circle"></i></p> */}
    </div>
  )
}

Footer.propTypes = {

}

export default Footer

