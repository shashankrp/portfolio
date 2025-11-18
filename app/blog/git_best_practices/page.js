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
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
        />
      </div>

      {/* CARD */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">GIT Best Practices</h1>
          <span className="text-sm opacity-80 font-semibold">9-Apr-2025</span>
        </div>

        <div className="space-y-4 text-[17px] leading-relaxed opacity-90">
          <p>
            Git is a version control system used to track code changes. It allows
            developers to work on multiple branches, collaborate efficiently, and
            maintain clean development workflows.
          </p>

          <p>
            Following best practices makes Git far more effective. Things like
            small commits, meaningful messages, and clean branching structures
            help teams move faster.
          </p>

          <p>The 5 best Git practices are:</p>

          <ol className="list-decimal ml-5 space-y-3">
            <li>
              <strong>Use descriptive commit messages:</strong> Explain what changed and why.
            </li>
            <li>
              <strong>Keep commits small and focused:</strong> Easier to review and revert.
            </li>
            <li>
              <strong>Use branches for new features:</strong> Keeps main branch stable.
            </li>
            <li>
              <strong>Use pull requests:</strong> Ensures code is reviewed before merging.
            </li>
            <li>
              <strong>Use tags for milestones:</strong> Helps identify stable releases.
            </li>
          </ol>
        </div>
      </div>

      {/* NAV */}
      <div className="flex justify-end mt-8">
        <a
          href="../blog/ghibli_style_images"
          className="bg-white/10 border border-white/20 backdrop-blur-md text-white py-3 px-6 rounded-xl shadow-md hover:bg-white/20 transition"
        >
          <strong className="block">Next</strong>
          <span className="text-sm opacity-80">Ghibli Style Images</span>
        </a>
      </div>
    </div>
  );
}
