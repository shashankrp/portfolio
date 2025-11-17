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
    <div className='max-w-5xl mx-auto pt-54 pb-40'>
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
        <h1>Technical Blogs</h1>
        <div className='pt-5'>
        {info.map((item, index) => (
            <div key={index} className='blog-items'>
                <a href={item.url} className='bg-none text-white text-decoration-none pb-2'>
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
