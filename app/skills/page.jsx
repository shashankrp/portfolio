import React from 'react'

function page() {
    return (
        <div className='container-md text-wrap font-monospace border-radius-md md:w-full font-bold my-container h-auto skills-container pt-54 sm:pl-100 md:pl-120'>
             {/* Skills section */}
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
  <div className="md:w-auto md:max-w-3xl sm:max-w-3xl pl-[10%] pr-[10%]" id="Skills"> 
    <h2 className='text-white text-center text-3xl font-semibold mb-6'>Skills</h2>
      <div role="progressbar" aria-label='80' aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
  <div className="flex justify-between gap-4">
            <p>React JS</p>
    <span className="text-sm font-medium text-white-100">80%</span>
  </div>

  <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
    <div className="h-full rounded-full bg-blue-600" style={{width: "80%"}}></div>
  </div>
</div>

<div role="progressbar" aria-label='50' aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div className="flex justify-between gap-4 mt-2">
    <span className="text-sm font-medium text-white-900">Tailwind CSS</span>

    <span className="text-sm font-medium text-white-900">45%</span>
  </div>

  <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
    <div className="h-full rounded-full bg-gray-600" style={{width: "45%"}}></div>
  </div>
</div>

<div role="progressbar" aria-label='50' aria-valuenow="50" aria-valuemin="0" aria-valuemax="50">
  <div className="flex justify-between gap-4 mt-2">
    <p>AWS Services</p>
    <span className="text-sm font-medium text-white-900">50%</span>
  </div>

  <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
    <div className="h-full rounded-full bg-green-600" style={{width: "50%"}}></div>
  </div>
</div>

<div role="progressbar" aria-label='60' aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div className="flex justify-between gap-4">
    <span className="text-sm font-medium text-white-900">Python</span>

    <span className="text-sm font-medium text-white-900">60%</span>
  </div>

  <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
    <div className="h-full rounded-full bg-red-600" style={{width: "60%"}}></div>
  </div>
</div>
</div>
        </div>
    )
}

export default page
