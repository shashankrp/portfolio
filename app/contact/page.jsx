'use client'
import React from 'react'
import PropTypes from 'prop-types'

function page(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/contact', {
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
        <div className="alert alert-primary" role="alert">
          We have received your message, i will get back to you soon.
        </div>
        window.location.reload();
        console.log(data);
      }).catch(err => {
        console.log("I am getting error while ", err);
      })
  }
  return (
    <div className='container pt-4'>
      <h1>Submit the Below Form:</h1>
      <form className="container mb-3 mt-20 self-center max-w-5xl" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address" required></input>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject" required></input>
        </div>
        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Description" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

page.propTypes = {

}

export default page

