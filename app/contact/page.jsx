'use client'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

function page(props) {
  const [isData, setIsData] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('./contact', {
      method: 'POST',
      body: JSON.stringify({
        email: e.target[0].value,
        subject: e.target[1].value,
        description: e.target[2].value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => {
        if (data) {
          setIsData(true);
        }
        setTimeout(() => {
          window.location.reload();
        }, 5000);
        console.log(data);
      }).catch(err => {
        console.log("I am getting error while ", err);
      })
  }
  return (
    <div className='container container-md font-monospace my-container h-auto contact-fade'>
      <h1>Contact me:</h1>
      <div className="container justify-self-center d-flex d-md-flex flex-column flex-md-row contact">
        <a href='https://github.com/shashankrp' target='_blank' className='text-black'>
          <i className="bi bi-github contact-i"></i>
        </a>
        <a href='https://www.linkedin.com/in/shashank-r-p-5a866b15a/' target='_blank' className='text-black'>
          <i className="bi bi-linkedin contact-i"></i>
        </a>
        <a href='mailto:shashankrp2@gmail.com' target='_blank' className='text-black'>
          <i className="bi bi-envelope-at-fill contact-i"></i> 
        </a>
      </div>
    </div>
  )
}

page.propTypes = {

}

export default page

