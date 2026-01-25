import React from "react";
import Headers from '../../headers'

export default function Page() {
  return (
    <div className="relative max-w-4xl mx-auto pt-32 pb-32 px-4 text-black">
      <Headers />
      {/* BACKGROUND BLOB */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
        />
      </div>

      {/* BLOG CARD */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Ghibli-style Images</h1>
          <span className="text-sm opacity-80 font-semibold">2-Apr-2025</span>
        </div>

        {/* TEXT */}
        <div className="space-y-5 text-[17px] leading-relaxed opacity-90">

          <p>
            ChatGPT is one of the most commonly used AI tools in the world. It is used
            for writing, coding, image generation, and a wide range of creative tasks.
          </p>

          <p>
            If used responsibly, AI can be incredibly helpful. But used carelessly,
            it can become dangerous—especially when sensitive data is involved.
          </p>

          <p>
            Recently, ChatGPT’s new image generation model has popularized a trend:
            <mark className="bg-yellow-300/30 px-1">Studio Ghibli–style images</mark>.
            People around the world are enjoying it, but many forget that AI learns
            from user inputs—including images.
          </p>

          <p>
            While this may not seem harmful today, future misuse could involve AI
            generating new images from your photos, potentially contributing to identity
            misuse or harmful manipulations.
          </p>

          <p>
            Final thoughts: AI is powerful, and extremely useful—but we must be careful.
            Avoid sharing personal information or sensitive images with any AI tool.
          </p>

        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between mt-8 text-black">
        <a
          href="./git_best_practices"
          className="bg-white/10 border border-white/20 backdrop-blur-md py-3 px-6 rounded-xl shadow-md hover:bg-white/20 transition duration-300"
        >
          <strong className="block">Back</strong>
          <span className="text-sm opacity-80">Git Best Practices</span>
        </a>

        <a
          href="../blog/whatsapp_media"
          className="bg-white/10 border border-white/20 backdrop-blur-md py-3 px-6 rounded-xl shadow-md hover:bg-white/20 transition duration-300"
        >
          <strong className="block">Next</strong>
          <span className="text-sm opacity-80">WhatsApp Media</span>
        </a>
      </div>

    </div>
  );
}
