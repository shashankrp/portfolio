import React from 'react'
import Headers from '../../headers'

export default function Page() {
  return (
    <div className="relative max-w-4xl mx-auto pt-32 pb-32 px-4 text-black">
      <Headers />
      {/* BACKGROUND GRADIENT BLOB */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
        />
      </div>

      {/* BLOG CONTENT CARD */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300">

        {/* HEADER ROW */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold leading-snug">
            How To Keep AI from Making Us Stupid
          </h1>
          <span className="text-sm opacity-80 font-semibold">
            2-Aug-2025
          </span>
        </div>

        {/* CONTENT BODY */}
        <div className="space-y-5 text-[17px] leading-relaxed opacity-90">

          <p>
            AI has become central to much of what we do, and as we rely on it more,
            we are slowly losing essential skills.
          </p>

          <p>
            Just like calculators made memorizing multiplication tables unnecessary,
            smartphones pushed cursive writing into obscurity, and ride-sharing apps
            have made many young people uninterested in learning how to drive.
          </p>

          <p>
            Tools like GitHub Copilot and Gemini Code Assist can accelerate development,
            catch errors, and even suggest entire code blocks.
          </p>

          <p>
            <strong>How to use AI smartly:</strong>  
            Always understand why the AI suggests a particular solution.  
            Review the logic, debug manually, and learn from the generated code.  
            Mindlessly copying outputs is the fastest path to becoming a “human debugging machine.”
          </p>

          <p>
            In conclusion, AI tools like ChatGPT are extremely useful, but we must use them wisely.  
            Don’t overshare personal data, and always keep developing your own thinking and problem-solving skills.
          </p>
        </div>
      </div>

      {/* BACK / NEXT BUTTONS */}
      <div className="flex justify-between mt-8 text-black">
        <a
          href="../blog/whatsapp_media"
          className="bg-white/10 border border-white/20 backdrop-blur-md py-3 px-6 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300"
        >
          <div className="text-left">
            <strong className="block">Back</strong>
            <span className="text-sm opacity-80">
              WhatsApp May soon let you stop...
            </span>
          </div>
        </a>
      </div>

    </div>
  );
}
