'use client'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from '@mui/material/Icon';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OutgoingMailIcon from '@mui/icons-material/OutgoingMail';

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
    <div className='pt-20'>
       <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
      <div className='max-w-5xl mx-auto pt-54 pb-40' id="Contact">
  <h2 className='text-3xl font-semibold text-center'>Contact Me</h2>
  <div className='flex justify-center mt-10 gap-10 pt-6'>
    <a href='https://github.com/shashankrp' target='_blank' className='text-black'>
    <Icon component={GitHubIcon} style={{ fontSize: 65, color: 'white' }} />
    </a>
    <a href='https://www.linkedin.com/in/shashank-r-p-5a866b15a/' target='_blank' className='text-black'>
    <Icon component={LinkedInIcon} style={{ fontSize: 70, color: 'white' }} />
    </a>
    <a href='mailto:shashankrp2@gmail.com' target='_blank' className='text-black'>
    <Icon component={OutgoingMailIcon} style={{ fontSize: 70, color: 'white' }} />
    </a>
  </div>
</div>
    </div>
  )
}

page.propTypes = {

}

export default page

