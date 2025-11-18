import React from "react";

export default function Page() {
  return (
    <div className="relative max-w-4xl mx-auto pt-32 pb-32 px-4 text-white">

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

      {/* CARD */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">
            WhatsApp may soon let you stop others from saving media
          </h1>
          <span className="text-sm opacity-80 font-semibold">18-Apr-2025</span>
        </div>

        <div className="space-y-5 text-[17px] leading-relaxed opacity-90">

          <p>
            WhatsApp is one of the world’s most popular messaging platforms. It
            supports chatting, calling, and sharing media, and is widely used by
            millions globally.
          </p>

          <p>
            A new privacy update may soon prevent users from saving images and videos
            sent to them. This is similar to “View Once” media, but more restrictive,
            adding more control over shared conversations.
          </p>

          <p>
            The update would also block chat export for users who enable this feature,
            and disable Meta AI functionalities in those conversations.
          </p>

          <p>
            These changes could significantly impact how people use WhatsApp—focusing
            more on privacy and limiting misuse of media content.
          </p>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between mt-8">
        <a
          href="./ghibli_style_images"
          className="bg-white/10 border border-white/20 backdrop-blur-md text-white py-3 px-6 rounded-xl shadow-md hover:bg-white/20 transition duration-300"
        >
          <strong className="block">Back</strong>
          <span className="text-sm opacity-80">Ghibli Style Images</span>
        </a>

        <a
          href="../blog/ai_making_us_stupid"
          className="bg-white/10 border border-white/20 backdrop-blur-md text-white py-3 px-6 rounded-xl shadow-md hover:bg-white/20 transition duration-300"
        >
          <strong className="block">Next</strong>
          <span className="text-sm opacity-80">AI Makes Us Stupid</span>
        </a>
      </div>

    </div>
  );
}
