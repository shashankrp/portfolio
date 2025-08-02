"use client"
import React from 'react'

export default function page() {
    const info = ([
        {
            "url": "./blog/ai_making_us_stupid",
            "title": "How To Keep AI from Making Us Stupid",
            "description": "AI has become central to much of what we do, but we rely on it more, we are bleeding related skills.",
        },
        {
            "url": "./blog/whatsapp_media",
            "title": "WhatsApp May soon let you stop others from saving media to there devices",
            "description": "WhatsApp is one of the most commonly used messaging app in the world and it is used by many people for many purposes.",
        },
        {   
            "url": "./blog/ghibli_style_images",
            "title": "Ghibli Style Images",
            "description": "This is one of hot trend getting globaly viral on the social media as most of the people of using chatgpt to create this.",
        },
        {
            "url": "./blog/git_best_practices",
            "title": "GIT Best Practices",
            "description": "Git is a version control system that allows developers to track changes in their codebase.",
        }
    ])

  return (
    <div className='container container-md my-container'>
        <h1>Technical Blogs</h1>
        <div className='pt-5'>
        {info.map((item, index) => (
            <div key={index} className='blog-items'>
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
