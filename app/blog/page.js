"use client"
import React from 'react'
import Headers from '../headers'

export default function Page() {
  const info = [
    {
      url: "./blog/ai_making_us_stupid",
      title: "How To Keep AI from Making Us Stupid",
      description: "AI has become central to daily life, but our growing dependence on it is weakening essential human skills.",
    },
    {
      url: "./blog/whatsapp_media",
      title: "WhatsApp May soon let you stop others from saving media to there devices",
      description: "WhatsApp may soon add a feature that prevents others from saving media you share, increasing privacy for users.",
    },
    {
      url: "./blog/ghibli_style_images",
      title: "Ghibli Style Images",
      description: "Ghibli-style AI images are trending worldwide as people use generative tools to create dreamy, animated visuals.",
    },
    {
      url: "./blog/git_best_practices",
      title: "GIT Best Practices",
      description: "Git is a powerful version-control system that helps developers track changes and collaborate efficiently.",
    }
  ]

  return (
    <div className='max-w-5xl mx-auto pt-40 pb-40 text-black'>
      <Headers />
      <h1 className='text-[45px] mb-6'>Technical Blogs</h1>

      {/* GRID → 4 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {info.map((item, index) => (
          <div 
            key={index} 
            className="bg-white/10 backdrop-blur-lg border border-black/20 rounded-xl p-5 shadow-md hover:shadow-xl transition"
          >
            <a href={item.url} className="text-black no-underline block">
              <h2 className="text-lg font-semibold">{item.title}</h2>

              <p className="pt-3 pb-4 text-sm" style={{ textAlign: "justify" }}>
                {item.description}
              </p>

              <strong className="text-blue-300">Read More...</strong>
            </a>
          </div>
        ))}

      </div>
    </div>
  )
}
