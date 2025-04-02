import React from 'react'
import PropTypes from 'prop-types'

function page(props) {
  return (
    <div className='container font-monospace my-container ml-4 w-5xl h-auto fading-effect about'>
      <h1>About Page</h1>
      <p className='pt-4' style={{textAlign: 'justify'}}>
        This is my portfolio where I am displaying all my skills and experience, showcasing who I am. 
        I am passionate about technology and constantly strive to learn and grow in my field. 
        My goal is to create impactful solutions that solve real-world problems and contribute to the tech community.
      </p>
      <ul className='pt-2'>
        <li className='pt-1 pb-1'><p><strong>Home:</strong> The landing page with an overview of my portfolio.</p></li>
        <li className='pb-1'><p><strong>Projects:</strong> A showcase of my completed projects and case studies.</p></li>
        <li className='pb-1'><p><strong>Blog:</strong> Articles and posts about my experiences and learnings.</p></li>
        <li className='pb-1'><p><strong>Contact:</strong> A form and details to get in touch with me.</p></li>
      </ul>
    </div>
  )
}

page.propTypes = {

}

export default page

