import React from 'react'

export default function page() {
  return (
    <div className='container my-container'>
        <h1>Technical Blogs</h1>
        <div className='pt-2'>
        <a href="./ghibli_style_images" className='bg-none text-black text-decoration-none'>
            <h2>Ghibli Style Images</h2>
            <p className='pt-3'>This is one of hot trend going 
                viral on the social media as most of the people 
                of using chatgpt to create this.</p>
            <strong>Read More...</strong>
        </a>
        </div>
        <hr/>
        <div className='pt-2 pb-2'>
        <a href="./git_best_practices" className='bg-none text-black text-decoration-none'>
            <h2>GIT Best Practices</h2>
            <p className='pt-3'>Git is a version control system that allows developers 
                to track changes in their codebase.</p>
            <strong>Read More...</strong>
        </a>
        </div>
        <hr/>
    </div>
  )
}
