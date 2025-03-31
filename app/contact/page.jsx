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
    <div className='container font-monospace my-container h-auto'>
      <h1>Contact me:</h1>
      {/* {isData && <div className="alert alert-primary" role="alert">
        We have received your message, i will get back to you soon.
      </div>} */}
      {/* <form className="container pt-4 text-center self-center max-w-5xl" onSubmit={handleSubmit}>
        <div className="mb-4 mt-4">
          <input type="email" className="form-control p-3" id="exampleFormControlInput1" placeholder="Email address" required></input>
        </div>
        <div className="mb-4">
          <input type="text" className="form-control p-3" id="exampleFormControlInput1" placeholder="Subject" required></input>
        </div>
        <div className="mb-4">
          <textarea className="form-control p-3" id="exampleFormControlTextarea1" placeholder="Description" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-1 p-2">Submit</button>
      </form> */}
      <div className="container justify-self-center d-flex d-md-flex flex-column flex-md-row contact">
        <a href='https://github.com/shashankrp' target='_blank' className='text-black'>
          <i className="bi bi-github contact-i"></i>
        </a>
        <a href='https://www.linkedin.com/in/shashank-r-p-5a866b15a/' target='_blank' className='text-black'>
          <i className="bi bi-linkedin contact-i"></i>
        </a>
        <a href='mailto:me@sarav.co' target='_blank' className='text-black'>
          <i className="bi bi-envelope-at-fill contact-i"></i>
        </a>
      </div>
    </div>
  )
}

page.propTypes = {

}

export default page

