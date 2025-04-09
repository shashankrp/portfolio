"use client"
import React from 'react'

export default function page() {
    const info = ([
        {   
            "url": "./blog/ghibli_style_images",
            "title": "Ghibli Style Images",
            "description": "This is one of hot trend getting globaly viral on the social media as most of the people of using chatgpt to create this. As of chatgpt is not only a normal QA AI.",
        },
        {
            "url": "./blog/git_best_practices",
            "title": "GIT Best Practices",
            "description": "Git is a version control system that allows developers to track changes in their codebase. It is widely used in the software development industry and is an essential tool for any developer.",
        }
    ])

  return (
    <div className='container my-container'>
        <h1>Technical Blogs</h1>
        <div className='pt-5'>
        {info.map((item, index) => (
            <div key={index}>
                <a href={item.url} className='bg-none text-black text-decoration-none pb-2'>
                    <h2>{item.title}</h2>
                    <p className='pt-3 pb-2' style={{textAlign: "justify"}}>{item.description}</p>
                    <strong>Read More...</strong>
                </a>
                <hr />
            </div>
        ))}
    </div>
    </div>
  )
}
